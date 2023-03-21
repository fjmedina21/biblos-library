"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPassword = exports.ForgotPassword = exports.ChangePassword = exports.LogIn = exports.SignUp = void 0;
const models_1 = require("../models");
const helpers_1 = require("../helpers");
async function SignUp(req, res) {
    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body;
        const user = new models_1.User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        if (confirmPassword !== password)
            throw new helpers_1.ErrorHandler("Passwords unmatch", 400);
        user.hashPassword(password);
        await user.save();
        const token = (await (0, helpers_1.GenerateJWT)(user.uId, user.isAdmin, user.isUser));
        return res.status(201).json({
            result: { ok: true, user, token }
        });
    }
    catch (error) {
        if (error instanceof helpers_1.ErrorHandler)
            return res.status(error.statusCode).json({ result: error.toJson() });
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.SignUp = SignUp;
const LogIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await models_1.User.findOneOrFail({
            select: ["uId", "firstName", "lastName", "email", "password", "isAdmin", "isUser", "state",],
            where: { email },
        });
        if (!user.state)
            throw new helpers_1.ErrorHandler("That account doesn't exist. Enter a different account or create a new one", 400);
        if (!(user.comparePassword(password)))
            throw new helpers_1.ErrorHandler("Your account or password is incorrect", 400);
        const token = await (0, helpers_1.GenerateJWT)(user.uId, user.isAdmin, user.isUser);
        res.status(200).json({
            result: { ok: true, user, token }
        });
    }
    catch (error) {
        if (error instanceof helpers_1.ErrorHandler)
            return res.status(error.statusCode).json({ result: error.toJson() });
        if (error instanceof Error)
            return res.status(400).json({ result: { ok: false, message: error.message } });
    }
};
exports.LogIn = LogIn;
async function ChangePassword(req, res) {
    try {
        const { id } = req.params;
        const { currentPassword, newPassword, confirmPassword } = req.body;
        const user = await models_1.User.findOneOrFail({
            select: ["password"],
            where: { uId: id },
        });
        if (!user.comparePassword(currentPassword))
            throw new helpers_1.ErrorHandler("Incorrect current password", 400);
        if (user.comparePassword(newPassword))
            throw new helpers_1.ErrorHandler("New password can't be the same", 400);
        if (confirmPassword !== newPassword)
            throw new helpers_1.ErrorHandler("Passwords unmatch", 400);
        await models_1.User.update({ uId: id }, { password: user.hashPassword(confirmPassword) });
        return res.status(200).json({ result: { ok: true, message: "Password updated" } });
    }
    catch (error) {
        if (error instanceof helpers_1.ErrorHandler)
            return res.status(error.statusCode).json({ result: error.toJson() });
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.ChangePassword = ChangePassword;
async function ForgotPassword(req, res) {
    try {
        const { email } = req.body;
        const emailExist = await models_1.User.findOneBy({
            email,
            state: true,
        });
        if (!emailExist)
            throw new helpers_1.ErrorHandler("We don't have an account linked to that email.", 400);
        const user = await models_1.User.findOneByOrFail({ email, state: true });
        const resetToken = (await (0, helpers_1.GenerateResetJWT)(email));
        const verificationLink = `${req.protocol}://${req.header("host")}/auth/reset-password/${resetToken}`;
        await models_1.User.update({ uId: user.uId }, { resetToken });
        // TODO: enviar mail con reset token link
        return res.status(200).json({
            result: {
                ok: true,
                message: "reset link send",
                verificationLink,
            },
        });
    }
    catch (error) {
        if (error instanceof helpers_1.ErrorHandler)
            return res.status(error.statusCode).json({ result: error.toJson() });
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.ForgotPassword = ForgotPassword;
async function ResetPassword(req, res) {
    try {
        const { newPassword, confirmPassword } = req.body;
        const { resetToken } = req.params;
        const user = await (0, helpers_1.ValidateResetJWT)(resetToken);
        if (confirmPassword !== newPassword)
            throw new helpers_1.ErrorHandler("Password unmatch", 400);
        await models_1.User.update({ uId: user.uId }, { password: user.hashPassword(confirmPassword), resetToken: "" });
        return res.status(200).json({
            result: {
                ok: true,
                message: "Password changed",
            },
        });
    }
    catch (error) {
        if (error instanceof helpers_1.ErrorHandler)
            return res.status(error.statusCode).json({ result: error.toJson() });
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.ResetPassword = ResetPassword;
