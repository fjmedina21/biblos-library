"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = exports.UpdateUser = exports.CreateUser = exports.GetUser = exports.GetUsers = void 0;
const models_1 = require("../models");
const helpers_1 = require("../helpers");
async function GetUsers(req, res) {
    const { from = 0, limit = 20 } = req.query;
    try {
        const [users, total] = (await models_1.User.findAndCount({
            where: { state: true },
            order: { updatedAt: "DESC", createdAt: "DESC" },
            skip: Number(from),
            take: Number(limit),
        })) || [];
        return res.status(200).json({ result: { ok: true, total, users } });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.GetUsers = GetUsers;
async function GetUser(req, res) {
    const { id } = req.params;
    try {
        const user = await models_1.User.findOneByOrFail({ uId: id, state: true }) || {};
        return res.status(200).json({ result: { ok: true, user } });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.GetUser = GetUser;
async function CreateUser(req, res) {
    const { firstName, lastName, email, password, isAdmin } = req.body;
    try {
        const user = new models_1.User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.isAdmin = isAdmin;
        user.hashPassword(password);
        await user.save();
        return res.status(201).json({ result: { ok: true, user }, });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.CreateUser = CreateUser;
async function UpdateUser(req, res) {
    const auth = (await (0, helpers_1.GetToken)(req));
    const { id } = req.params;
    const { firstName, lastName, email, confirmPassword, isAdmin } = req.body;
    try {
        //TODO: check logic
        const user = await models_1.User.findOneOrFail({
            select: ["firstName", "lastName", "email", "password", "isAdmin"],
            where: { uId: id },
        });
        if (firstName)
            user.firstName = firstName;
        if (lastName)
            user.lastName = lastName;
        if (email)
            user.email = email;
        if (auth.isAdmin)
            user.isAdmin = isAdmin;
        if (!user.comparePassword(confirmPassword))
            throw new helpers_1.ErrorHandler("Your password is incorrect", 400);
        await user.save();
        return res.status(200).json({ result: { ok: true, message: "User updated", user } });
    }
    catch (error) {
        if (error instanceof helpers_1.ErrorHandler)
            return res.status(error.statusCode).json({ result: error.toJson() });
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.UpdateUser = UpdateUser;
async function DeleteUser(req, res) {
    const { id } = req.params;
    const { state } = req.body;
    try {
        await models_1.User.update({ uId: id }, { state, isUser: false, isAdmin: false });
        return res.status(204).json();
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.DeleteUser = DeleteUser;
