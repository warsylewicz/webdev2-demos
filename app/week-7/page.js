"use client";

import DogList from "./dog-list.js";
import DogForm from "./dog-form.js";
import dogData from "./dog-data.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  const handleAddDog = (newDog) => {
    setDogs([...dogs, newDog]);
  };

  const handleDelete = (id) => {
    const updatedDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(updatedDogs);
  };

  return (
    <div>
      <h1>Week 7</h1>

      <DogList dogs={dogs} onDelete={handleDelete} />
      <DogForm onAddDog={handleAddDog} />
    </div>
  );
}
