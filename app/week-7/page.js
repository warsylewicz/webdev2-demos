"use client";

import DogList from "./dog-list.js";
import DogForm from "./dog-form.js";
import dogData from "./dogs.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  const handleAddDog = (dog) => {
    // we cannot mutate the state directly, e.g. dogs.push(dog)
    setDogs([...dogs, dog]); // Add the new dog to the list of dogs
  };

  const handleDeleteDog = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id)); // Remove the dog with the given id
  };

  return (
    <div>
      <h1>Dog Management</h1>
      <DogForm onAddDog={handleAddDog} />
      <DogList dogs={dogs} onDeleteDog={handleDeleteDog} />
    </div>
  );
}
