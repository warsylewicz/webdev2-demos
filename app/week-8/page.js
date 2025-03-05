"use client";

import { useState, useEffect } from "react";

async function fetchRandomDog(breed) {
  const response =
    breed && breed !== "Random breed"
      ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      : await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json(); // converts the response body to a JavaScript object
  console.log(data);
  return data.message; // this is the URL of the image
}

async function fetchBreeds() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return Object.keys(data.message); // this is an array of breed names
}

export default function Page() {
  const [randomDog, setRandomDog] = useState(null);
  const [breeds, setBreeds] = useState([]);

  const loadRandomDog = async () => {
    const newRandomDog = await fetchRandomDog();
    setRandomDog(newRandomDog);
  };

  const loadBreeds = async () => {
    const newBreeds = await fetchBreeds();
    setBreeds(["Random breed", ...newBreeds]);
  };

  const handleChange = async (event) => {
    const newRandomDog = await fetchRandomDog(event.target.value);
    setRandomDog(newRandomDog);
  };

  useEffect(() => {
    loadRandomDog();
    loadBreeds();
  }, []); // empty array means this effect runs only once

  return (
    <main>
      <h1>Week 8</h1>
      <select onChange={handleChange}>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <div>
        <img src={randomDog} alt="A random dog" />
      </div>
    </main>
  );
}
