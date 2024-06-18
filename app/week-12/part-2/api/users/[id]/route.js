// fetch one user
export async function GET(request, { params }) {
  const id = Number(params.id);

  // SELECT * FROM users where id=${id}`;
  const users = [
    { id: 1, name: "Abe", age: 30 },
    { id: 2, name: "Bob", age: 20 },
  ];
  const user = users.find((user) => user.id === id);

  if (!user) {
    return new Response(null, { status: 404 });
  }

  console.log(`fetch user ${id}`);
  return new Response(JSON.stringify(user), { status: 200 });
}

// update all the information of a user
export async function PUT(request, { params }) {
  const user = await request.json();

  const id = Number(params.id);

  // update user in database
  // UPDATE users SET name = ${user.name}, age = ${user.age} WHERE id = ${id}

  console.log(`(full) update user ${id}`);
  return new Response(null, { status: 204 });
}

// update partial information of a user
export async function PATCH(request, { params }) {
  const id = Number(params.id);
  const user = await request.json();

  if (user.name) {
    // update name in database
    // UPDATE users SET name = ${user.name} WHERE id = ${id}
  }

  if (user.age) {
    // update age in database
    // UPDATE users SET age = ${user.age} WHERE id = ${id}
  }

  console.log(`(partial) update user ${id}`);
  return new Response(null, { status: 204 });
}

// delete a user
export async function DELETE(request, { params }) {
  const id = Number(params.id);

  // delete user in database
  // DELETE FROM users WHERE id = ${id}

  console.log(`delete user ${id}`);
  return new Response(null, { status: 204 });
}
