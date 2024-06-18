import { neon } from "@neondatabase/serverless";

// fetch list of users
export async function GET() {
  const databaseUrl = process.env.DATABASE_URL || "";
  const sql = neon(databaseUrl);
  const response = await sql`SELECT * FROM users;`;
  return new Response(JSON.stringify(response), { status: 200 });
}

// create a new user
export async function POST(request: Request) {
  const requestData = await request.json();
  const databaseUrl = process.env.DATABASE_URL || "";
  const sql = neon(databaseUrl);
  const response =
    await sql`INSERT INTO users (email, name, age, role) VALUES (${requestData.email}, ${requestData.name}, ${requestData.age}, ${requestData.role}) RETURNING *;`;

  return new Response(JSON.stringify(response), { status: 201 });
}

// delete all users
export async function DELETE() {
  const databaseUrl = process.env.DATABASE_URL || "";
  const sql = neon(databaseUrl);
  const response = await sql`DELETE FROM users;`;

  return new Response(null, { status: 204 });
}
