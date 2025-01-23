import { db } from "@acme/db/client";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";

import * as schema from "@acme/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [admin()],
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      console.log(
        `[FAKE] Reseting password to ${user.email} with token ${token} go to this url ${url}`,
      );
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    requireEmailVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      console.log(
        `[FAKE] Sending email to ${user.email} with token ${token} go to this url ${url}`,
      );
    },
  },
});
