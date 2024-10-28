"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [randomDog, setRandomDog] = useState(null);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  const getRandomDog = async (breed) => {
    const response = breed
      ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      : await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const url = data.message;
    setRandomDog(url);
  };

  const getBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const message = data.message;
    const breeds = Object.keys(message); // Object.keys returns an array of keys which are the breeds
    setBreeds(breeds);
  };

  useEffect(() => {
    getRandomDog();
    getBreeds();
  }); // [] means it will only run once when the component is displayed

  useEffect(() => {
    getRandomDog(selectedBreed);
  }, [selectedBreed]); // [selectedBreed] means it will run whenever selectedBreed changes

  return (
    <div>
      <h1>Week 8</h1>
      <div>
        <select onChange={(e) => setSelectedBreed(e.target.value)}>
          {breeds.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
      </div>
      <div>
        <img src={randomDog} alt="Random dog" />
      </div>
    </div>
  );
}
