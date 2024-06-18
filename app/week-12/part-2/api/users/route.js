// fetch list of users
export async function GET() {
  // fetch users from database
  // SELECT * FROM users
  const users = [
    { id: 1, name: "Abe", age: 30 },
    { id: 2, name: "Bob", age: 20 },
  ];

  console.log(`fetch users`);
  return new Response(JSON.stringify(users), { status: 200 });
}

// create a new user
export async function POST(request) {
  const newUser = await request.json();

  // create new user in database
  // INSERT INTO users (name, age) VALUES (${newUser.name}, ${newUser.age}) RETURNING *
  // update id based on returning result
  newUser.id = 3;

  console.log(`create new user`);
  return new Response(JSON.stringify(newUser), { status: 201 });
}
