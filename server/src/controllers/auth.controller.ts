import { Response, Request } from "express";

import { User } from "../models";
import { GenerateJWT, GenerateResetJWT, ValidateResetJWT, ErrorHandler } from "../helpers";

export async function SignUp(req: Request, res: Response) {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const user: User = new User();

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    if (confirmPassword !== password) throw new ErrorHandler("Passwords unmatch", 400);
    user.hashPassword(password);
    await user.save();

    return res.status(201).json({ result: { ok: true, message: "signed up" } });
  } catch (error: unknown) {
    if (error instanceof ErrorHandler) return res.status(error.statusCode).json({ result: error.toJson() });

    if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
  }
}

export const LogIn = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user: User | null = await User.findOne({
      select: ["uId", "firstName", "lastName", "email", "password", "isAdmin", "isUser", "state"], where: { email }
    });

    if (!user || !user.state) throw new ErrorHandler("That account doesn't exist. Try another or create a new one", 400);

    const { password, createdAt, updatedAt, resetToken, state, isAdmin, isUser, ...info } = user;

    if (!user.comparePassword(req.body.password)) throw new ErrorHandler("Incorrect Password", 400);

    const token = (await GenerateJWT(user.uId, isAdmin, isUser)) as string;
    res.status(200).json({ result: { ok: true, info, token } });
  } catch (error: unknown) {
    if (error instanceof ErrorHandler) return res.status(error.statusCode).json({ result: error.toJson() });

    if (error instanceof Error) return res.status(400).json({ result: { ok: false, message: error.message } });
  }
};

export async function ChangePassword(req: Request, res: Response) {
  const { id } = req.params;
  const { currentPassword, newPassword, confirmPassword } = req.body;

  try {
    const user: User = await User.findOneOrFail({ select: ["password"], where: { uId: id } });

    if (!user.comparePassword(currentPassword)) throw new ErrorHandler("Incorrect current password", 400);

    if (user.comparePassword(newPassword)) throw new ErrorHandler("New password can't be the same", 400);

    if (confirmPassword !== newPassword) throw new ErrorHandler("Passwords unmatch", 400);

    await User.update({ uId: id }, { password: user.hashPassword(confirmPassword) });
    return res.status(200).json({ result: { ok: true, message: "Password changed" } });
  } catch (error: unknown) {
    if (error instanceof ErrorHandler) return res.status(error.statusCode).json({ result: error.toJson() });

    if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
  }
}

export async function ForgotPassword(req: Request, res: Response) {
  const { email } = req.body;

  try {
    const emailExist: User | null = await User.findOneBy({ email, state: true });

    if (!emailExist) throw new ErrorHandler("That account doesn't exist.", 400);

    const user: User = await User.findOneByOrFail({ email, state: true });
    const resetToken = (await GenerateResetJWT(email)) as string;
    const verificationLink = `${req.protocol}://${req.header("host")}/auth/reset-password/${resetToken}`;

    await User.update({ uId: user.uId }, { resetToken });

    // TODO: enviar mail con reset token link

    return res.status(200).json({ result: { ok: true, message: "reset link send", verificationLink } });
  } catch (error: unknown) {
    if (error instanceof ErrorHandler) return res.status(error.statusCode).json({ result: error.toJson() });

    if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
  }
}

export async function ResetPassword(req: Request, res: Response) {
  const { newPassword, confirmPassword } = req.body;
  const { resetToken } = req.params;

  try {
    const user: User | null = await ValidateResetJWT(resetToken);
		if (confirmPassword !== newPassword) throw new ErrorHandler("Password unmatch", 400);
		else if (!user) throw new ErrorHandler("Invalid token", 400);

		await User.update({ uId: user.uId }, {
			password: user.hashPassword(newPassword),
			resetToken: ""
		});
    
    return res.status(200).json({ result: { ok: true, message: "Password changed" } });
  } catch (error: unknown) {
    if (error instanceof ErrorHandler) return res.status(error.statusCode).json({ result: error.toJson() });

    if (error instanceof Error) return res.status(500).json({ result: { ok: false, message: error.message } });
  }
}
