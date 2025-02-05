"use client";

import { useState } from "react";

export default function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    let dog = { name, breed, age };
    console.log(dog);
    // in Week 10 we will save this to a database

    // reset form
    setName("");
    setBreed("");
    setAge(0);
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    if (newName.length > 10) {
      // alert("Name must be 10 characters or less");
      return;
    }
    setName(event.target.value);
  };

  const handleBreedChange = (event) => {
    let newBreed = event.target.value;
    newBreed = newBreed.toUpperCase();
    setBreed(newBreed);
  };

  const handleAgeChange = (event) => {
    let newAge = event.target.value;
    let ageNum = parseInt(newAge);
    if (ageNum < 0) {
      return;
    }
    setAge(ageNum);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => handleNameChange(event)}
        />
        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(event) => handleBreedChange(event)}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(event) => handleAgeChange(event)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {name.length === 10 && <p>Name must be 10 characters or less</p>}
        <p>
          The dog is {age} {age === 1 ? "year" : "years"} old.
        </p>
      </div>
    </section>
  );
}
