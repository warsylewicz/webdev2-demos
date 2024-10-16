"use client";

import DogList from "./dog-list.js";
import DogForm from "./dog-form.js";
import dogData from "./dog-data.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  const handleAddDog = (dog) => {
    setDogs([...dogs, dog]);
    // you cannot do something like dogs.push(dog) because it would mutate the state
    // the spread operator ... creates a new array with the new dog added
  };

  const handleDeleteDog = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id));
  };

  return (
    <div>
      <h1>Week 6</h1>
      <h2>Manage Dogs</h2>
      <DogList dogs={dogs} onDelete={handleDeleteDog} />
      <DogForm onAddDog={handleAddDog} />
    </div>
  );
}
