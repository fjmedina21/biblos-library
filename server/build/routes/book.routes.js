"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const BookRoutes = (0, express_1.Router)();
exports.BookRoutes = BookRoutes;
BookRoutes.get("/", controllers_1.GetBooks);
BookRoutes.get("/:title", controllers_1.GetBook);
BookRoutes.post("/", [middlewares_1.ValidateJWT, middlewares_1.IsAdmin,
    (0, express_validator_1.check)(["title", "genre", "author", "description"]).trim(),
    (0, express_validator_1.check)("title", "Title required").notEmpty(),
    (0, express_validator_1.check)("genre", "Genre required").notEmpty(),
    (0, express_validator_1.check)("author", "Authors required").notEmpty(),
    middlewares_1.BookExist,
    middlewares_1.ValidateFields], controllers_1.CreateBook);
BookRoutes.patch("/:id", [middlewares_1.ValidateJWT, middlewares_1.IsAdmin, middlewares_1.BookIdExist, middlewares_1.ValidateFields,], controllers_1.UpdateBook);
BookRoutes.delete("/:id", [middlewares_1.ValidateJWT, middlewares_1.IsAdmin, middlewares_1.BookIdExist, middlewares_1.ValidateFields], controllers_1.DeleteBook);
