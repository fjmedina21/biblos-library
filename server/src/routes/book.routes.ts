import { Router } from "express";
import { check } from "express-validator";

import {
    GetBook,
    GetBooks,
    CreateBook,
    UpdateBook,
    DeleteBook
} from "../controllers";

import {
    IsAdmin,
    BookExist,
    BookIdExist,
    ValidateJWT,
    ValidateFields,
} from "../middlewares";

const BookRoutes = Router();

BookRoutes.get("/", GetBooks);

BookRoutes.get("/:title", GetBook);

BookRoutes.post(
    "/",
    [ValidateJWT, IsAdmin,
        check(["title", "genre", "author", "description"]).trim(),
        check("title", "Title required").notEmpty(),
        check("genre", "Genre required").notEmpty(),
        check("author", "Authors required").notEmpty(),
        BookExist,
        ValidateFields],
    CreateBook
);

BookRoutes.patch(
    "/:id",
    [ValidateJWT, IsAdmin, BookIdExist,
        check(["title", "genre", "author", "description"]).trim(),
        check("title", "Title required").notEmpty(),
        check("genre", "Genre required").notEmpty(),
        check("author", "Authors required").notEmpty(),
        ValidateFields,],
    UpdateBook
);

BookRoutes.delete(
    "/:id",
    [ValidateJWT, IsAdmin, BookIdExist, ValidateFields],
    DeleteBook
);

export { BookRoutes };
