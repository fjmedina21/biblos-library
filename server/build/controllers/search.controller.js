"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const typeorm_1 = require("typeorm");
const models_1 = require("../models");
async function Search(req, res) {
    const { term } = req.params;
    try {
        const isUUID = false; // TODO: validate if term is UUID
        if (isUUID) {
            const user = await models_1.Book.findOneByOrFail({
                uId: term,
            });
            return res.status(200).json({ result: user ? [user] : [] });
        }
        const [books, total] = await models_1.Book.findAndCount({
            where: [
                { title: (0, typeorm_1.Like)(`%${term}%`) },
                { author: (0, typeorm_1.Like)(`%${term}%`) },
                { genre: (0, typeorm_1.Like)(`%${term}%`) },
                { description: (0, typeorm_1.Like)(`%${term}%`) },
            ],
        });
        return res.status(200).json({ total, results: books });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ result: { ok: false, message: error.message } });
    }
}
exports.Search = Search;
