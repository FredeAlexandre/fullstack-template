import { seed } from "drizzle-seed";
import * as schema from "./src/schema.ts";

import { db } from "./src/client.ts";

async function main() {
  await seed(db, schema).refine((funcs) => ({
    user: {
      count: 10,
      columns: {
        id: funcs.string({ isUnique: true }),
        name: funcs.firstName(),
        email: funcs.email(),
        emailVerified: funcs.boolean(),
        image: funcs.valuesFromArray({
          values: [
            "https://ui.shadcn.com/avatars/01.png",
            "https://ui.shadcn.com/avatars/02.png",
            "https://ui.shadcn.com/avatars/03.png",
            "https://ui.shadcn.com/avatars/04.png",
            "https://ui.shadcn.com/avatars/05.png",
          ],
        }),
        createdAt: funcs.date({ minDate: "2010-12-31", maxDate: "2024-08-26" }),
        updatedAt: funcs.date({ minDate: "2010-12-31", maxDate: "2024-08-26" }),
        role: funcs.valuesFromArray({ values: ["user"] }),
        banned: funcs.default({ defaultValue: null }),
        banReason: funcs.default({ defaultValue: null }),
        banExpires: funcs.default({ defaultValue: null }),
      },
    },
  }));
}

main();
