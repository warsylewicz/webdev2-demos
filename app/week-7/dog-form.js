"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  const [dog, setDog] = useState({ name: "", age: 0 });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dog);
    const id = Math.floor(Math.random() * 10000); // generate an id
    let newDog = { ...dog };
    newDog.id = id;
    onAddDog(newDog); // add the id to the dog object
    setDog({ name: "", age: 0 });
  };

  const handleNameChange = (event) => {
    setDog({ ...dog, name: event.target.value });
  };

  const handleAgeChange = (event) => {
    setDog({ ...dog, age: parseInt(event.target.value) });
  };

  return (
    <div>
      <h2>Dog Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={dog.name} onChange={handleNameChange} />
        </label>
        <label>
          Age:
          <input type="number" value={dog.age} onChange={handleAgeChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
