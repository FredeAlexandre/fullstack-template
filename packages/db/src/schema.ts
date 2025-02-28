import {
  integer,
  pgTable,
  timestamp,
  text,
  json
} from "drizzle-orm/pg-core";

import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const statistics = pgTable("statistics", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: text("name").unique().notNull(),
  value: json("value").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertStatisticsSchema = createInsertSchema(statistics);
export const selectStatisticsSchema = createSelectSchema(statistics);

export type Statistics = typeof statistics.$inferSelect;

