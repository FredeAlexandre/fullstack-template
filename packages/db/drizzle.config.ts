import "dotenv/config";

import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
	throw new Error("Missing DATABASE_URL environement variable");
}

export default {
	schema: "./src/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL,
	},
	casing: "snake_case",
} satisfies Config;
