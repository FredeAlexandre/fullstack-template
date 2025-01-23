import type { Config } from "drizzle-kit";
import { resolve } from "path"

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DB_FILE_NAME environement variable");
}

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  driver: process.env.NODE_ENV === "development" ? "pglite" : undefined,
  dbCredentials: {
    url: resolve(__dirname, "../../", process.env.DATABASE_URL),
  },
  casing: "snake_case",
} satisfies Config & { driver: "pglite" | undefined };
