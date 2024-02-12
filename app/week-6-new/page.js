"use client";

import Counter from "./counter.js";
import DogList from "./dog-list.js";
import dogData from "./dogs.json";
import DogForm from "./dog-form.js";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  function addDog(dog) {
    setDogs([...dogs, dog]);
  }

  function deleteDog(id) {
    setDogs(dogs.filter((dog) => dog.id !== id));
  }

  return (
    <main>
      <DogList dogs={dogs} onDelete={deleteDog} />
      <DogForm onAddDog={addDog} />
    </main>
  );
}
