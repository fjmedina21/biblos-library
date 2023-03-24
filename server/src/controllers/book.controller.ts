import { Response, Request } from "express";
import { UploadedFile } from "express-fileupload";
import fs from "fs-extra";

import { Book } from "../models";
import { PhotoUpload, PhotoDelete } from "../helpers";
import { Like } from "typeorm";

export async function GetBooks(req: Request, res: Response) {
    const { from = 0, limit = 20 } = req.query;

    try {
        const [books, total]: [Book[], number] =
            (await Book.findAndCount({
                order: { updatedAt: "DESC", createdAt: "DESC" },
                skip: Number(from),
                take: Number(limit),
            })) || [];

        return res.status(200).json({ result: { ok: true, total, books } });
    } catch (error: unknown) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}

export async function GetBook(req: Request, res: Response) {
    const { title } = req.params;

    try {
        const book: Book | {} = await Book.findOneBy({ title }) || {};
        return res.status(200).json({ result: { ok: true, book } });
    } catch (error: unknown) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}

export async function CreateBook(req: Request, res: Response) {
    const { title, author, genre, description, price, stock } = req.body;
    const coverFile = req.files?.cover as UploadedFile;

    try {
        const book: Book = new Book();
        book.title = title;
        book.author = author;
        book.genre = genre;
        book.description = description;
        book.price = price;
        book.stock = stock;

        if (coverFile) {
            await PhotoUpload(coverFile, "books")
                .then(({ public_id, secure_url }) => { book.cover = { public_id, secure_url }; })
                .catch((reason) => { throw new Error(reason); });
        }

        await book.save();
        return res.status(201).json({ result: { ok: true, book }, });
    } catch (error: unknown) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    } finally {
        if (coverFile) await fs.unlink(coverFile.tempFilePath);
    }
}

export async function UpdateBook(req: Request, res: Response) {
    const { id } = req.params;
    const { title, author, genre, description, price, stock } = req.body;
    const coverFile = req.files?.cover as UploadedFile;

    try {
        const book: Book = await Book.findOneByOrFail({ uId: id });
        //TODO: 

    } catch (error: unknown) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    } finally {
        if (coverFile) await fs.unlink(coverFile.tempFilePath);
    }

}

export async function DeleteBook(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const { cover } = await Book.findOneByOrFail({ uId: id });
        if (cover) await PhotoDelete(cover.public_id);
        await Book.delete({ uId: id });

        return res.status(204).json();
    } catch (error: unknown) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}