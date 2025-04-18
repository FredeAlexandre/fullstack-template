import { drizzle as drizzleNodePostgres } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
	throw new Error("Missing DATABASE_URL is required");
}

export const db = drizzleNodePostgres(process.env.DATABASE_URL, { schema });
