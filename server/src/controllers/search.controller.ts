import { Response, Request } from "express";
import { Like } from "typeorm";

import { Book } from "../models";

export async function Search(req: Request, res: Response) {
	const { term } = req.params;

	try {
		const [books, total] = await Book.findAndCount({
			where: [
				{ title: Like(`%${term}%`) },
				{ author: Like(`%${term}%`) },
				{ genre: Like(`%${term}%`) },
				{ description: Like(`%${term}%`) },
			],
		});

		return res.status(200).json({ ok: true, total, results: books });
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
	}
}
