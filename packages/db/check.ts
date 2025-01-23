import pg from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL environment variable");
}

async function checkDatabaseConnection() {
  const { Client } = pg;

  // Create a new client instance
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    // Connect to the database
    await client.connect();
    console.log("✅ Successfully connected to the database!");
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error.message);
  } finally {
    // Close the connection
    await client.end();
  }
}

checkDatabaseConnection();
