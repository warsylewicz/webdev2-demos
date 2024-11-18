// fetch one dog
export async function GET(request, { params }) {
  const { id } = await params; // params is a promise
  const idNum = Number(id); // all params are strings

  // SELECT * FROM dogs where id=${id}`;
  const dogs = [
    { id: 1, name: "Luna", age: 2 },
    { id: 2, name: "Max", age: 4 },
  ];
  const dog = dogs.find((dog) => dog.id === idNum);

  if (!dog) {
    return new Response(null, { status: 404 });
  }

  console.log(`fetch dog ${id}`);
  return new Response(JSON.stringify(dog), { status: 200 });
}

// update all the information of a dog
export async function PUT(request, { params }) {
  const { id } = await params;
  const idNum = Number(id);
  const dog = await request.json();

  // update dog in database
  // UPDATE dogs SET name = ${dog.name}, age = ${dog.age} WHERE id = ${idNum}

  console.log(`(full) update dog ${idNum} with ${JSON.stringify(dog)}`);
  return new Response(null, { status: 204 });
}

// update partial information of a dog
export async function PATCH(request, { params }) {
  const { id } = await params;
  const idNum = Number(id);
  const dog = await request.json();

  if (dog.name) {
    // update name in database
    // UPDATE dogs SET name = ${dog.name} WHERE id = ${idNum}
  }

  if (dog.age) {
    // update age in database
    // UPDATE dogs SET age = ${dog.age} WHERE id = ${idNum}
  }

  console.log(`(partial) update dog ${idNum} with ${JSON.stringify(dog)}`);
  return new Response(null, { status: 204 });
}

// delete a dog
export async function DELETE(request, { params }) {
  const { id } = await params;
  const idNum = Number(id);

  // delete dog in database
  // DELETE FROM dogs WHERE id = ${id}

  console.log(`delete dog ${idNum}`);
  return new Response(null, { status: 204 });
}
