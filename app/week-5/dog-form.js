"use client";

import { useState } from "react";

export default function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);

  const handleNameChange = (event) => {
    let name = event.target.value;
    name = name.replace(/[^a-zA-Z\s]/g, "");
    setName(name);
  };

  const handleBreedChange = (event) => {
    let breed = event.target.value;
    breed = breed.replace(/[^a-zA-Z\s]/g, "");
    setBreed(breed);
  };

  const handleAgeChange = (event) => {
    let age = event.target.value;
    age = parseInt(age);
    if (isNaN(age)) {
      age = 0;
    }
    if (age < 0) {
      age = 0;
    }
    setAge(age);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let dog = { name, breed, age };
    console.log(dog); // eventually save to a database

    // reset form
    setName("");
    setBreed("");
    setAge(0);
  };

  return (
    <div className="m-2">
      <h2 className="text-2xl">Add a Dog</h2>
      <form className="m-2" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => handleNameChange(event)}
          className="border border-black m-2"
        />
        <label htmlFor="breed">Breed:</label>
        <input
          id="breed"
          type="text"
          value={breed}
          onChange={(event) => handleBreedChange(event)}
          className="border border-black m-2"
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(event) => handleAgeChange(event)}
          className="border border-black m-2"
        />
        <input
          type="submit"
          value="Add Dog"
          className="m-2 bg-blue-500 hover:bg-blue-700"
        />
      </form>
      <div className="text-lg">
        <p>Name: {name.length >= 3 ? name : "Name too short"}</p>
        <p>Breed: {breed}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
