import { createServerFn } from "@tanstack/start";
import { count, eq } from "@acme/db";
import { db } from "@acme/db/client";
import { user } from "@acme/db/schema";

import { z } from "zod";

import { auth } from "@/lib/auth";

export const fetchAdminsAmount = createServerFn({ method: "GET" }).handler(
  async () => {
    const result = await db
      .select({ count: count() })
      .from(user)
      .where(eq(user.role, "admin"));
    if (result.length == 0) return 0;
    return result[0].count;
  },
);

export const promoteUserAsAdmin = createServerFn({ method: "POST" })
  .validator((email: string) => z.string().parse(email))
  .handler(async ({ data: email }) => {
    const admins_amount = await fetchAdminsAmount();
    if (admins_amount !== 0)
      throw new Error(
        "Error you can promote user as admin only if there is no admin",
      );
    await db.update(user).set({ role: "admin" }).where(eq(user.email, email));
  });
