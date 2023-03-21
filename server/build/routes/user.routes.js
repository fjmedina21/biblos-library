"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const UserRoutes = (0, express_1.Router)();
exports.UserRoutes = UserRoutes;
UserRoutes.get("/", [middlewares_1.ValidateJWT, middlewares_1.IsAdmin, middlewares_1.ValidateFields], controllers_1.GetUsers);
UserRoutes.get("/:id", [middlewares_1.ValidateJWT, middlewares_1.IsAdmin, middlewares_1.UserIdExist, middlewares_1.ValidateFields], controllers_1.GetUser);
UserRoutes.post("/", [middlewares_1.ValidateJWT, middlewares_1.IsAdmin,
    (0, express_validator_1.check)(["firstName", "lastName", "email", "password"]).trim(),
    (0, express_validator_1.check)("firstName", "firstName required").notEmpty(),
    (0, express_validator_1.check)("lastName", "lastName required").notEmpty(),
    (0, express_validator_1.check)("email", "Invalid email").isEmail(),
    middlewares_1.EmailExist,
    (0, express_validator_1.check)("password", "Password must be at least 8 characters").isLength({ min: 8, }),
    middlewares_1.ValidateFields], controllers_1.CreateUser);
UserRoutes.patch("/:id", [middlewares_1.ValidateJWT, middlewares_1.IsUser, middlewares_1.UserIdExist,
    (0, express_validator_1.check)(["firstName", "lastName", "email"]).trim(),
    //check("email","Invalid email").isEmail(),
    (0, express_validator_1.check)("confirmPassword", "Password confirmatin required").notEmpty(),
    middlewares_1.ValidateFields], controllers_1.UpdateUser);
UserRoutes.delete("/:id", [middlewares_1.ValidateJWT, middlewares_1.IsAdmin, middlewares_1.UserIdExist, middlewares_1.ValidateFields], controllers_1.DeleteUser);
