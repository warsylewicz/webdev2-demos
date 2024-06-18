// Problem: we don't know the shape of the request body

// Solution: check the request body

// create a new user
export async function POST(request) {
  const newUserData = await request.json();

  // validate the request body
  if (
    !newUserData.name ||
    !newUserData.age ||
    newUserData.name === "" ||
    newUserData.age === "" ||
    isNaN(newUserData.age) ||
    newUserData.age < 0
  ) {
    return new Response("Invalid request body", { status: 400 });
  }

  const newUser = {
    name: newUserData.name,
    age: newUserData.age,
  };

  // create new user in database
  // ...

  // return the new user
  return new Response(JSON.stringify(newUser), { status: 201 });
}
