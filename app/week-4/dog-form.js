"use client";

import { useState } from "react";

export default function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, breed, age });
  };

  function onNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h2>Add a Dog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={onNameChange}
            className="text-black"
          />
        </label>
        <label>
          Breed:{" "}
          <input
            type="text"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            className="text-black"
          />
        </label>
        <label>
          Age:{" "}
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="text-black"
          />
        </label>
        <button type="submit">Add Dog</button>
      </form>
    </div>
  );
}
