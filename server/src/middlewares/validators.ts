import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { User, Book } from "../models";
import { GetToken } from "../helpers";

export async function ValidateJWT(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { uId } = (await GetToken(req)) as JwtPayload;

		const userExist: User | null = await User.findOneBy({
			uId,
			state: true,
		});

		if (!userExist) throw new Error();

		next();
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(400).json({ result: { ok: false, message: error.message } });
	}
}

export async function IsAdmin(req: Request, res: Response, next: NextFunction) {
	try {
		const { isAdmin } = (await GetToken(req)) as JwtPayload;

		if (!isAdmin) throw new Error("Need ADMIN access");

		next();
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(403).json({ result: { ok: false, message: error.message } });
	}
}

export async function IsUser(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { isUser } = (await GetToken(req)) as JwtPayload;

		if (!isUser) throw new Error("Create an account");

		if (isUser) next();
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(400).json({ result: { ok: false, message: error.message } });
	}
}

export async function EmailExist(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { email } = req.body;

		const user: User | null = await User.findOneBy({ email });

		if (user) throw new Error("Someone already has that email address. Try another one.");

		next();
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(400).json({ result: { ok: false, message: error.message } });
	}
}

export async function UserIdExist(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { id } = req.params;

		const user: User | null = await User.findOneBy({ uId: id, state: true });

		if (!user) throw new Error("User not found");

		next();
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(400).json({ result: { ok: false, message: error.message } });
	}
}

export async function BookExist(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { title } = req.body;

		const book: Book | null = await Book.findOneBy({ title });

		if (book) throw new Error("This book is already register.");

		next();
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(400).json({ result: { ok: false, message: error.message } });
	}
}

export async function BookIdExist(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { id } = req.params;

		const book: Book | null = await Book.findOneBy({ uId: id });

		if (!book) throw new Error("Book not found");

		next();
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
	}
}