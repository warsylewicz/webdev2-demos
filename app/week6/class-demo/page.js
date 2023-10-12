"use client";

import { useState } from "react";
import DogList from "./dog-list.js";
import DogForm from "./dog-form.js";
import Dog from "./dog.js";

const dogsData = [
  { name: "Sparky", age: 2 },
  { name: "Spot", age: 4 },
  { name: "Rover", age: 7 },
  { name: "Rex", age: 10 },
];

export default function Page() {
  const [dogs, setDogs] = useState(dogsData);

  function handleSubmit(dog) {
    alert(`Adding ${dog.name} who is ${dog.age} years old`);
    setDogs([...dogs, dog]);
  }

  function handleDelete(name) {
    alert(`Deleting ${name}`);
    setDogs(dogs.filter((dog) => dog.name !== name));
  }

  return (
    <main>
      <DogForm onSubmit={(dog) => handleSubmit(dog)} />
      <DogList dogs={dogs} onDelete={handleDelete} />
    </main>
  );
}
