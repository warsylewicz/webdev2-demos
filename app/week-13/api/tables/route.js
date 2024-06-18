import { neon } from "@neondatabase/serverless";

export async function POST() {
  try {
    const databaseUrl = process.env.DATABASE_URL || ""; // Set a default value if DATABASE_URL is undefined
    const sql = neon(databaseUrl);
    // postgres database
    // create a table for users containing id, email, name, age, and role
    const response =
      await sql`CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(100), name VARCHAR(100), age INT, role VARCHAR(10));`;

    return Response.json({ response }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const databaseUrl = process.env.DATABASE_URL || "";
    const sql = neon(databaseUrl);
    const result = await sql`DROP TABLE users;`;
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
