// Problem: we don't know the shape of the request body

// Solution: check the request body

// create a new dog
export async function POST(request) {
  const newDogData = await request.json();

  // validate the request body
  if (
    !newDogData.name ||
    !newDogData.age ||
    newDogData.name === "" ||
    newDogData.age === "" ||
    isNaN(newDogData.age) ||
    newDogData.age < 0
  ) {
    return new Response("Invalid request body", { status: 400 });
  }

  const newDog = {
    name: newDogData.name,
    age: newDogData.age,
  };

  // create new dog in database
  // ...

  // return the new dog
  return new Response(JSON.stringify(newDog), { status: 201 });
}
