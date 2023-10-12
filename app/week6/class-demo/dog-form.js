"use client";

import { useState } from "react";

export default function DogForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const dog = { name, age };
    onSubmit(dog);
    setName("");
    setAge(0);
  }

  return (
    <div>
      <h2>Add a Dog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="text-black"
          value={name}
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          className="text-black"
          value={age}
          type="number"
          id="age"
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <button>Add Dog</button>
      </form>
    </div>
  );
}
