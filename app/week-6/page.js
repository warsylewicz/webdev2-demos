"use client";

import dogsJson from "./dogs.json"; // Import the JSON file with the data and is automatically parsed into a JavaScript array. Easy peasy!
import { useState } from "react";

export default function Page() {
  const [selectedDogId, setSelectedDogId] = useState(-1); // Create a state variable to keep track of the selected dog. Initially, it's -1.
  let dogs = [...dogsJson]; // Spread the array to make a copy of it

  dogs.sort((a, b) => a.name.localeCompare(b.name)); // Sort the array of dogs by name. This is done in place, so no need to reassign the variable. Array is mutated.

  dogs = dogs.filter((dog) => dog.id !== 2); // remove the bad dog from the array.

  const handleClick = (id) => {
    if (selectedDogId === id) {
      setSelectedDogId(-1);
      return;
    }
    setSelectedDogId(id);
  };

  return (
    <main className="m-4">
      <h1 className="text-4xl bold">Week 6</h1>
      <p>Selected dog id: {selectedDogId}</p>
      <ul>
        {dogs.map((dog) => (
          <li
            key={dog.id}
            onClick={() => handleClick(dog.id)}
            className={`flex items-center space-x-4 w-1/2 ${
              dog.id === selectedDogId ? "bg-gray-200" : ""
            }`}
          >
            <img
              src={dog.imageUrl}
              alt={dog.name}
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h2 className="text-2xl">{dog.name}</h2>
              <p>{dog.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
