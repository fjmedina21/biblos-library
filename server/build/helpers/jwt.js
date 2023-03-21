"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetToken = exports.ValidateResetJWT = exports.GenerateResetJWT = exports.GenerateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = require("../config/index");
const index_2 = require("../models/index");
function GenerateJWT(uId, isAdmin, isUser) {
    return new Promise((resolve, reject) => {
        const payload = { uId, isAdmin, isUser };
        const options = {
            expiresIn: index_1.config.JWT_SESSION_EXPIRES_IN,
        };
        jsonwebtoken_1.default.sign(payload, index_1.config.JWT_SECRECT, options, (error, token) => {
            if (error)
                reject(error);
            else
                resolve(token);
        });
    });
}
exports.GenerateJWT = GenerateJWT;
function GenerateResetJWT(email) {
    return new Promise((resolve, reject) => {
        const payload = { email };
        const options = {
            expiresIn: index_1.config.JWT_RESET_TOKEN_EXPIRES_IN,
        };
        jsonwebtoken_1.default.sign(payload, index_1.config.JWT_RESET_TOKEN_SECRECT, options, (error, token) => {
            if (error)
                reject(error);
            else
                resolve(token);
        });
    });
}
exports.GenerateResetJWT = GenerateResetJWT;
async function ValidateResetJWT(resetToken) {
    const { email } = jsonwebtoken_1.default.verify(resetToken, index_1.config.JWT_RESET_TOKEN_SECRECT);
    return await index_2.User.findOneOrFail({
        select: ["uId", "password", "resetToken"],
        where: { email, resetToken },
    });
}
exports.ValidateResetJWT = ValidateResetJWT;
async function GetToken(req) {
    const token = req.header("auth");
    if (token)
        return jsonwebtoken_1.default.verify(token, index_1.config.JWT_SECRECT);
}
exports.GetToken = GetToken;
