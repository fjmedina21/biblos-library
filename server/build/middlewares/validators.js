"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookIdExist = exports.BookExist = exports.UserIdExist = exports.EmailExist = exports.IsUser = exports.IsAdmin = exports.ValidateJWT = void 0;
const models_1 = require("../models");
const helpers_1 = require("../helpers");
async function ValidateJWT(req, res, next) {
    try {
        const { uId } = (await (0, helpers_1.GetToken)(req));
        const userExist = await models_1.User.findOneBy({
            uId,
            state: true,
        });
        if (!userExist)
            throw new Error();
        next();
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ result: { ok: false, message: error.message } });
    }
}
exports.ValidateJWT = ValidateJWT;
async function IsAdmin(req, res, next) {
    try {
        const { isAdmin } = (await (0, helpers_1.GetToken)(req));
        if (!isAdmin)
            throw new Error("Need ADMIN access");
        next();
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(403).json({ result: { ok: false, message: error.message } });
    }
}
exports.IsAdmin = IsAdmin;
async function IsUser(req, res, next) {
    try {
        const { isUser } = (await (0, helpers_1.GetToken)(req));
        if (!isUser)
            throw new Error("Create an account");
        if (isUser)
            next();
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ result: { ok: false, message: error.message } });
    }
}
exports.IsUser = IsUser;
async function EmailExist(req, res, next) {
    try {
        const { email } = req.body;
        const user = await models_1.User.findOneBy({ email });
        if (user)
            throw new Error("Someone already has that email address. Try another one.");
        next();
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ result: { ok: false, message: error.message } });
    }
}
exports.EmailExist = EmailExist;
async function UserIdExist(req, res, next) {
    try {
        const { id } = req.params;
        const user = await models_1.User.findOneBy({ uId: id, state: true });
        if (!user)
            throw new Error("User not found");
        next();
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ result: { ok: false, message: error.message } });
    }
}
exports.UserIdExist = UserIdExist;
async function BookExist(req, res, next) {
    try {
        const { title } = req.body;
        const book = await models_1.Book.findOneBy({ title });
        if (book)
            throw new Error("This book is already register.");
        next();
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ result: { ok: false, message: error.message } });
    }
}
exports.BookExist = BookExist;
async function BookIdExist(req, res, next) {
    try {
        const { id } = req.params;
        const book = await models_1.Book.findOneBy({ uId: id });
        if (!book)
            throw new Error("Book not found");
        next();
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.BookIdExist = BookIdExist;
