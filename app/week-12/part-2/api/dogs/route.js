// fetch list of dogs
// GET request for /api/dogs
export async function GET() {
  // fetch dogs from database
  // SELECT * FROM dogs
  const dogs = [
    { id: 1, name: "Luna", age: 2 },
    { id: 2, name: "Max", age: 4 },
  ];

  console.log(`fetch dogs`);
  return new Response(JSON.stringify(dogs), { status: 200 });
}

// create a new dog
// POST request for /api/dogs
export async function POST(request) {
  const newDog = await request.json();

  // create new dog in database
  // INSERT INTO dogs (name, age) VALUES (${newDog.name}, ${newDog.age}) RETURNING *
  // update id based on returning result
  newDog.id = 3;

  console.log(`create new dog`);
  return new Response(JSON.stringify(newDog), { status: 201 });
}
