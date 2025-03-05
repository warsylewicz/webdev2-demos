"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  const [dog, setDog] = useState({ name: "", age: 0 });

  const handleNameChange = (event) => {
    setDog({ ...dog, name: event.target.value });
  };

  const handleAgeChange = (event) => {
    setDog({ ...dog, age: parseInt(event.target.value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dog);
    const newId = Math.floor(Math.random() * 1000000);
    onAddDog({ ...dog, id: newId });
    setDog({ name: "", age: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Dog</h2>
      <label>
        Name:
        <input type="text" value={dog.name} onChange={handleNameChange} />
      </label>
      <label>
        Age:
        <input type="number" value={dog.age} onChange={handleAgeChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
