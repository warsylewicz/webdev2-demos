import { neon } from "@neondatabase/serverless";

// fetch one user
export async function GET(
  request: Request,
  { params }: { params: { id: number | string } }
) {
  const databaseUrl = process.env.DATABASE_URL || "";
  const sql = neon(databaseUrl);

  const id = Number(params.id);
  const response = await sql`SELECT * FROM users WHERE id = ${id};`;
  const user = response[0];

  if (!user) {
    return new Response(null, { status: 404 });
  }

  return new Response(JSON.stringify(user), { status: 200 });
}

// update all the information of a user
export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const databaseUrl = process.env.DATABASE_URL || "";
  const sql = neon(databaseUrl);
  const requestData = await request.json();

  const response =
    await sql`UPDATE users SET email = ${requestData.email}, name = ${requestData.name}, age = ${requestData.age}, role = ${requestData.role} WHERE id = ${params.id} RETURNING *;`;

  if (response.length === 0) {
    return new Response(null, { status: 404 });
  }

  return new Response(null, { status: 204 });
}

// delete a user
export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const databaseUrl = process.env.DATABASE_URL || "";
  const sql = neon(databaseUrl);
  const response =
    await sql`DELETE FROM users WHERE id = ${params.id} RETURNING *;`;

  if (response.length === 0) {
    return new Response(null, { status: 404 });
  }

  return new Response(null, { status: 204 });
}
