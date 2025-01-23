import pg from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL environment variable");
}

async function cleanDatabase() {
  const { Client } = pg;

  // Create a new client instance
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    console.log("🔄 Connecting to the database...");
    await client.connect();
    console.log("✅ Successfully connected to the database!");

    // Fetch all tables in the database
    console.log("📋 Fetching all tables in the database...");
    const result = await client.query(`
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
        AND table_type = 'BASE TABLE';
    `);

    const tables = result.rows;

    if (tables.length === 0) {
      console.log("ℹ️  No tables found in the database to drop.");
      return;
    }

    console.log(`✅ Found ${tables.length} table(s). Starting cleanup...`);

    // Disable foreign key constraints temporarily
    console.log("🚧 Disabling foreign key constraints...");
    await client.query("SET session_replication_role = 'replica';");

    // Drop each table
    for (const { table_schema, table_name } of tables) {
      const fullTableName = `${table_schema}.${table_name}`;
      console.log(`🧹 Dropping table: ${fullTableName}...`);
      await client.query(`DROP TABLE ${fullTableName} CASCADE;`);
      console.log("✅ Successfully dropped table: $fullTableName");
    }

    // Re-enable foreign key constraints
    console.log("🔄 Re-enabling foreign key constraints...");
    await client.query("SET session_replication_role = 'origin';");

    console.log(
      "🎉 Database cleanup completed successfully! All tables have been dropped.",
    );
  } catch (error) {
    console.error(
      "❌ An error occurred during database cleanup:",
      error.message,
    );
  } finally {
    // Close the connection
    console.log("🔌 Closing database connection...");
    await client.end();
    console.log("✅ Database connection closed.");
  }
}

cleanDatabase();
