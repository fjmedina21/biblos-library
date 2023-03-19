import "dotenv/config";

export const config = {
	DEV_PORT:  3000,

	DB_HOST: "localhost",
	DB_PORT: 3307,
	DB_USER: "root",
	DB_PASS: "",
	DB_NAME: "bibloslibrary",

	JWT_SECRECT: "No$0h9US1RhL",
	JWT_SESSION_EXPIRES_IN: "3h",
	JWT_RESET_TOKEN_SECRECT: "8kO$eP8K0m0D",
	JWT_RESET_TOKEN_EXPIRES_IN: "10m",
};

export { };
