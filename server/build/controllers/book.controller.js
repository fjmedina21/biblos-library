"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBook = exports.UpdateBook = exports.CreateBook = exports.GetBook = exports.GetBooks = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const models_1 = require("../models");
const helpers_1 = require("../helpers");
async function GetBooks(req, res) {
    const { from = 0, limit = 20 } = req.query;
    try {
        const [books, total] = (await models_1.Book.findAndCount({
            order: { updatedAt: "DESC", createdAt: "DESC" },
            skip: Number(from),
            take: Number(limit),
        })) || [];
        return res.status(200).json({ result: { ok: true, total, books } });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.GetBooks = GetBooks;
async function GetBook(req, res) {
    const { title } = req.params;
    try {
        const book = await models_1.Book.findOneBy({ title }) || {};
        return res.status(200).json({ result: { ok: true, book } });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.GetBook = GetBook;
async function CreateBook(req, res) {
    const { title, author, genre, description, price, stock } = req.body;
    const coverFile = req.files?.cover;
    try {
        const book = new models_1.Book();
        book.title = title;
        book.author = author;
        book.genre = genre;
        book.description = description;
        book.price = price;
        book.stock = stock;
        if (coverFile) {
            await (0, helpers_1.PhotoUpload)(coverFile, "books")
                .then(({ public_id, secure_url }) => { book.cover = { public_id, secure_url }; })
                .catch((reason) => { throw new Error(reason); });
        }
        await book.save();
        return res.status(201).json({ result: { ok: true, book }, });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
    finally {
        if (coverFile)
            await fs_extra_1.default.unlink(coverFile.tempFilePath);
    }
}
exports.CreateBook = CreateBook;
async function UpdateBook(req, res) {
    const { id } = req.params;
    const { title, author, genre, description, price, stock } = req.body;
    const coverFile = req.files?.cover;
    try {
        const book = await models_1.Book.findOneByOrFail({ uId: id });
        //TODO: 
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
    finally {
        if (coverFile)
            await fs_extra_1.default.unlink(coverFile.tempFilePath);
    }
}
exports.UpdateBook = UpdateBook;
async function DeleteBook(req, res) {
    const { id } = req.params;
    try {
        const { cover } = await models_1.Book.findOneByOrFail({ uId: id });
        if (cover)
            await (0, helpers_1.PhotoDelete)(cover.public_id);
        await models_1.Book.delete({ uId: id });
        return res.status(204).json();
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.DeleteBook = DeleteBook;
