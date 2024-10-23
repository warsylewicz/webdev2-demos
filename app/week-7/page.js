"use client";

import DogList from "./dog-list.js";
import DogForm from "./dog-form.js";
import dogData from "./dog-data.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  const handleAddDog = (dog) => {
    setDogs([...dogs, dog]); // add dog to dogs array, spread operator to create new array, dog is the new dog, dogs is the old array
  };

  const handleDeleteDog = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id)); // filter out the dog with the id
  };

  return (
    <div>
      <h1>My App</h1>
      <DogList dogs={dogs} onDeleteDog={handleDeleteDog} />
      <DogForm onAddDog={handleAddDog} />
    </div>
  );
}
