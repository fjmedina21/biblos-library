"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super();
        this.ok = false;
        this.message = message;
        this.statusCode = statusCode;
    }
    toJson() {
        return { ok: this.ok, message: this.message, };
    }
}
exports.ErrorHandler = ErrorHandler;
