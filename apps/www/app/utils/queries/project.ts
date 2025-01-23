import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/start";

import { db } from "@acme/db/client";
import { CreateProjectSchema, project, user } from "@acme/db/schema";

import { eq, gte, lt, ne } from "drizzle-orm";

import type { z } from "zod";
import { fetchUser } from "./auth";

export const fetchUserProjects = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await fetchUser();

    if (!session) {
      throw new Error("User not connected");
    }

    return db.select().from(project).where(eq(project.userId, session.user.id));
  },
);

export const userProjectsQueryOptions = () =>
  queryOptions({
    queryKey: ["projects"],
    queryFn: () => fetchUserProjects(),
  });

export const createProjectFn = createServerFn({ method: "POST" })
  .validator((x: Omit<z.infer<typeof CreateProjectSchema>, "userId">) =>
    CreateProjectSchema.omit({ userId: true }).parse(x),
  )
  .handler(async ({ data }) => {
    const session = await fetchUser();

    if (!session) {
      throw new Error("User not connected");
    }

    await db.insert(project).values({ userId: session.user.id, ...data });
  });
