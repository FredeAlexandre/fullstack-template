import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL is required");
}

export const db = drizzle(process.env.DATABASE_URL);
