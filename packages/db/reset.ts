import { reset } from "drizzle-seed";
import * as schema from "./src/schema.ts";

import { db } from "./src/client.ts";

async function main() {
  await reset(db, schema);
}

main();
