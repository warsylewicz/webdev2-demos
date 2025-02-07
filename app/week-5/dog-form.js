"use client";

import { useState } from "react";

export default function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault(); // do not submit the form or reload the page
    let dog = { name, breed, age };
    console.log(dog);
    // save to database in week 10

    // now clear the form
    setName("");
    setBreed("");
    setAge(0);
  };

  const handleNameChange = (e) => {
    // no special characters allowed
    let newName = e.target.value;
    newName = newName.replace(/[^a-zA-Z ]/g, "");
    setName(newName);
  };

  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => handleNameChange(e)} />
        <label>Breed</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => handleBreedChange(e)}
        />
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {breed.match(/[^a-zA-Z ]/) ? "Breed contains special characters" : ""}
      </div>
      <div>{age === 0 ? "Age is required" : ""}</div>
    </section>
  );
}
