"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000000);
    let dog = { id, name, age };
    onAddDog(dog);
  };

  return (
    <div>
      <h2>Dog Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(parseInt(event.target.value))}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
