import { drizzle as drizzleNodePostgres } from "drizzle-orm/node-postgres";
import { drizzle as drizzlePgLite } from 'drizzle-orm/pglite';

import { resolve } from "path";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL is required");
}

console.log(resolve(import.meta.dirname, "../../../", process.env.DATABASE_URL))

export const db = process.env.NODE_ENV == "development" ? drizzlePgLite(resolve(import.meta.dirname, "../../../", process.env.DATABASE_URL)) : drizzleNodePostgres(process.env.DATABASE_URL);