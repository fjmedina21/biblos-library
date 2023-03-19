import { Response, Request } from "express";
import { Like } from "typeorm";

import { Book } from "../models";

export async function Search(req: Request, res: Response) {
	const { term } = req.params;

	try { 
		const isUUID: boolean = false; // TODO: validate if term is UUID
		if (isUUID) {
			const user: Book = await Book.findOneByOrFail({
				uId: term,
			});

			return res.status(200).json({ result: user ? [user] : [] });
		}

		const [books, total] = await Book.findAndCount({
			where: [
				{ title: Like(`%${term}%`) },
				{ author: Like(`%${term}%`) },
				{ genre: Like(`%${term}%`) },
				{ description: Like(`%${term}%`) },
			],
		});

		return res.status(200).json({ total, results: books });
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
	}
}
