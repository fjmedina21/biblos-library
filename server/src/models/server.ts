import "reflect-metadata";

import cors from "cors";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import express, { Express } from "express";
import fileupload from "express-fileupload";

import { AppDataSource } from "../config/orm.config";
import { config } from "../config";
import {
	$404Route,
	HomeRoute,
	AuthRoutes,
	BookRoutes,
	UserRoutes,
	SearchRoutes,
} from "../routes";

export class Server {
	private app: Express;
	private PORT: number;
	private readonly path = {
		$404: "/",
		home: "/",
		auth: "/auth",
		users: "/users",
		books: "/books",
		search: "/search",
	};

	constructor() {
		this.app = express();
		this.PORT = config.DEV_PORT || 3000;

		this.dbConnection();
		this.middlewares();
		this.routes();
		this.listen();
	}

	private middlewares(): void {
		this.app.use(cors());
		this.app.use(helmet());
		this.app.use(morgan("dev"));
		this.app.use(express.json());
		this.app.use(express.urlencoded());
		this.app.use(express.static(path.join(__dirname, "../public")));
		this.app.use(fileupload({ useTempFiles: true, tempFileDir: '../tmp' }));
	}

	private async dbConnection(): Promise<void> {
		try {
			await AppDataSource.initialize();
		} catch (error: unknown) {
			console.error(error);
		}
	}

	private routes(): void {
		this.app.use(this.path.home, HomeRoute);
		this.app.use(this.path.auth, AuthRoutes);
		this.app.use(this.path.books, BookRoutes);
		this.app.use(this.path.users, UserRoutes);
		this.app.use(this.path.search, SearchRoutes);
		this.app.use(this.path.$404, $404Route);
	}

	private listen(): void {
		this.app.listen(this.PORT, () =>
			console.log(`listening on http://localhost:${this.PORT}`)
		);
	}
}
