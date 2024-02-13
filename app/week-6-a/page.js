"use client";

import DogList from "./dog-list.js";
import DogForm from "./dog-form.js";
import DogData from "./dog-data.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(DogData);

  const addDog = (dog) => {
    setDogs([...dogs, dog]); // This updates the state with a new array that includes the previous dogs and the new dog. The spread operator ... is used to copy the previous dogs array.
    // The goal is to update the state with a new array, not to modify the previous array.
    // We cannot do dogs.push(dog) because that would modify the previous array and not update the state.
  };

  const deleteDog = (id) => {
    const newDogs = dogs.filter((dog) => dog.id !== id); // This creates a new array that includes all the dogs except the one with the specified id.
    setDogs(newDogs);
  };

  return (
    <main>
      <h1>Week 6 Demos</h1>
      <DogList dogs={dogs} onDeleteDog={deleteDog} />
      <DogForm onAddDog={addDog} />
    </main>
  );
}

// = vs == vs ===

// = is the assignment operator. It assigns the value on the right to the variable on the left.

// == is the equality operator. It compares two values and returns true if they are equal. It does type coercion, which means it converts the values to the same type before comparing them.

// === is the strict equality operator. It compares two values and returns true if they are equal and of the same type. It does not do type coercion.

1 == "1"; // true
1 === "1"; // false

1 != "1"; // false
1 !== "1"; // true
