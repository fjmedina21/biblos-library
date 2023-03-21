"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
const orm_config_1 = require("../config/orm.config");
const config_1 = require("../config");
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.path = {
            auth: "/auth",
            users: "/users",
            books: "/books",
            search: "/search",
            $404: "/",
        };
        this.app = (0, express_1.default)();
        this.PORT = config_1.config.DEV_PORT || 3000;
        this.dbConnection();
        this.middlewares();
        this.routes();
        this.listen();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded());
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
        this.app.use((0, express_fileupload_1.default)({ useTempFiles: true, tempFileDir: '../tmp' }));
        this.app.use((0, morgan_1.default)("dev"));
    }
    async dbConnection() {
        try {
            await orm_config_1.AppDataSource.initialize();
        }
        catch (error) {
            console.error("------------------------------------------------");
            console.error(error);
        }
    }
    routes() {
        this.app.use(this.path.auth, routes_1.AuthRoutes);
        this.app.use(this.path.books, routes_1.BookRoutes);
        this.app.use(this.path.search, routes_1.SearchRoutes);
        this.app.use(this.path.users, routes_1.UserRoutes);
        this.app.use(this.path.$404, routes_1.$404Route);
    }
    listen() {
        this.app.listen(this.PORT, () => console.log(`listening on http://localhost:${this.PORT}`));
    }
}
exports.Server = Server;
