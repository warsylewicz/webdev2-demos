"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const id = Date.now();
    const dog = { id, name, age };
    onAddDog(dog);
    alert(JSON.stringify(dog));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="text-black"
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(Number(event.target.value))}
        className="text-black"
      />
      <button type="submit">Add</button>
    </form>
  );
}
