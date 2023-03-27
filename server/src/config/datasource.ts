import { DataSource } from "typeorm";

import { Book } from "../models/book.model";
import { User } from "../models/user.model";
import { config } from ".";

export const AppDataSource = new DataSource({
	type: "mysql",
	host: config.DB_HOST,
	port: config.DB_PORT,
	username: config.DB_USER,
	password: config.DB_PASS,
	database: config.DB_NAME,
	entities: [User, Book], 
	synchronize: true
});
