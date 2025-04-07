import { db } from "@acme/db/client";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import {
	admin,
	apiKey,
	multiSession,
	oidcProvider,
	organization,
	twoFactor,
	username,
} from "better-auth/plugins";
import { passkey } from "better-auth/plugins/passkey";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	appName: "Acme",
	plugins: [
		multiSession(),
		admin(),
		twoFactor(),
		username(),
		organization({
			organizationCreation: {
				beforeCreate: async ({ organization, user }, request) => {},
				afterCreate: async ({ organization, member, user }, request) => {},
			},
		}),
		passkey({
			rpID: "acme.com",
			rpName: "Acme",
			origin: "http://localhost:3000",
		}),
		apiKey(),
		oidcProvider({
			loginPage: "/auth/sign-in", // path to the login page
			// metadata to define
		}),
	],
	databaseHooks: {
		session: {
			create: {
				before: async (session) => {
					// This hooks is called before creating sessions very usefull
					// to set some things before session start has for example the active
					// organization of the user more details at: https://www.better-auth.com/docs/plugins/organization
				},
			},
		},
	},
	emailVerification: {
		sendOnSignUp: true,
		autoSignInAfterVerification: true,
		sendVerificationEmail: async ({ user, url, token }) => {
			console.log(
				`[EMAIL][VERIFICATION]: User ${user.name}@${user.id}, token ${token}, url to verify: ${url}`,
			);
		},
	},
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
		sendResetPassword: async ({ user, url, token }) => {
			console.log(
				`[EMAIL][RESET-PASSWORD]: User ${user.name}@${user.id}, token ${token}, url to reset password: ${url}`,
			);
		},
	},
});
