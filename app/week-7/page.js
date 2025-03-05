"use client";

import DogList from "./dog-list";
import DogForm from "./dog-form";
import dogData from "./dogs.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  const handleAddDog = (dog) => {
    setDogs([...dogs, dog]);
  };

  const handleDeleteDog = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id));
  };

  return (
    <div>
      <h1>Dog Management System (DMS)</h1>
      <DogForm onAddDog={handleAddDog} />
      <DogList dogs={dogs} onDeleteDog={handleDeleteDog} />
    </div>
  );
}
