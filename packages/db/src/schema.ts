import { relations } from "drizzle-orm";
import {
	boolean,
	integer,
	pgTable,
	serial,
	text,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";

import { createInsertSchema, createSelectSchema } from "drizzle-zod";

// Table des utilisateurs
export const users = pgTable("users", {
	id: uuid("id").defaultRandom().primaryKey(),
	username: text("username").notNull().unique(),
	email: text("email").notNull().unique(),
	age: integer("age"),
	isActive: boolean("is_active").default(true),
	createdAt: timestamp("created_at").defaultNow(),
	bio: text("bio"),
	role: text("role").default("user"),
});

export const usersInsertSchema = createInsertSchema(users);

export const usersSelectSchema = createSelectSchema(users);

// Table des posts
export const posts = pgTable("posts", {
	id: serial("id").primaryKey(),
	userId: uuid("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	title: text("title").notNull(),
	content: text("content"),
	createdAt: timestamp("created_at").defaultNow(),
});

// Table des relations d'amitié
export const friends = pgTable("friends", {
	id: serial("id").primaryKey(),
	userId: uuid("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	friendId: uuid("friend_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at").defaultNow(),
});

// Définition des relations avec Drizzle
export const usersRelations = relations(users, ({ many }) => ({
	posts: many(posts),
	friends: many(friends),
}));

export const postsRelations = relations(posts, ({ one }) => ({
	user: one(users, {
		fields: [posts.userId],
		references: [users.id],
	}),
}));

export const friendsRelations = relations(friends, ({ one }) => ({
	user: one(users, {
		fields: [friends.userId],
		references: [users.id],
	}),
	friend: one(users, {
		fields: [friends.friendId],
		references: [users.id],
	}),
}));
