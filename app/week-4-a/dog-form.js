"use client";

import { useState } from "react";

export default function DogForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState("");

  console.log("server");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevent the default behavior of the form
    const dog = { name, age, breed };
    console.log(dog);
    alert(JSON.stringify(dog));
    setName("");
  }

  return (
    <div>
      <h2 className="text-2xl mt-4">Dog Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="text-black"
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          className="text-black"
        />
        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
          className="text-black"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
