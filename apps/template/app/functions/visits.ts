import { createServerFn } from "@tanstack/start"

import { eq } from "@acme/db"
import { db } from "@acme/db/client"
import { statistics } from "@acme/db/schema"

import { z } from "zod"

const VISITS_KEY = "visits"

export const getVisitsFn = createServerFn({ method: "GET" }).handler(async () => {
  const visits = await db.select().from(statistics).where(eq(statistics.name, VISITS_KEY)).limit(1)

  if (visits.length === 0 || !visits[0]) {
    return 0
  }

  return z.number().parse(visits[0].value)
})

export const incrementVisitsFn = createServerFn({ method: "POST" }).handler(async () => {
  const visits = await getVisitsFn()

  if (visits === 0) {

    await db.insert(statistics).values({
        name: VISITS_KEY,
        value: visits + 1,
    }).onConflictDoUpdate({
        target: [statistics.name],
        set: {
        value: visits + 1
        }
    })
} else {
    await db.update(statistics).set({
        value: visits + 1
    }).where(eq(statistics.name, VISITS_KEY))
}
})
