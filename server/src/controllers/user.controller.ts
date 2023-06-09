import { Response, Request } from "express";

import { User } from "../models";
import { ErrorHandler } from "../helpers";

export async function GetUsers(req: Request, res: Response) {
	const { from = 0, limit = 20 } = req.query;

	try {
		const [users, total]: [User[], number] =
			(await User.findAndCount({
				where: { state: true },
				order: { updatedAt: "DESC", createdAt: "DESC" },
				skip: Number(from),
				take: Number(limit),
			})) || [];

		return res.status(200).json({ result: { ok: true, total, users } });
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
	}
}

export async function GetUser(req: Request, res: Response) {
	const { id } = req.params;

	try {
		const user: User = await User.findOneByOrFail({ uId: id, state: true }) || {};

		return res.status(200).json({ result: { ok: true, user } });
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
	}
}

export async function CreateUser(req: Request, res: Response) {
	const { firstName, lastName, email, password, isAdmin } = req.body;

	try {
		const user: User = new User();
		user.firstName = firstName;
		user.lastName = lastName;
		user.email = email;
		user.isAdmin = isAdmin;
		user.hashPassword(password);
		await user.save();

		return res.status(201).json({ result: { ok: true, message: "user created" }, });
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
	}
}

export async function UpdateUser(req: Request, res: Response) {
	const { id } = req.params;
	const { confirmPassword, ...payload } = req.body;

	try {
		const user: User = await User.findOneOrFail({
			select: ["firstName", "lastName", "email", "password"],
			where: { uId: id }
		});

		if (!user.comparePassword(confirmPassword)) throw new ErrorHandler("Your password is incorrect", 400);

		await User.update({ uId: id }, payload);
		return res.status(200).json({ result: { ok: true, message: "User updated" } });
	} catch (error: unknown) {
		if (error instanceof ErrorHandler)
			return res.status(error.statusCode).json({ result: error.toJson() });

		if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
	}
}

export async function DeleteUser(req: Request, res: Response) {
	const { id } = req.params;

	try {
		await User.update({ uId: id }, { state: false, isUser: false, isAdmin: false });

		return res.status(204).json();
	} catch (error: unknown) {
		if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
	}
}
