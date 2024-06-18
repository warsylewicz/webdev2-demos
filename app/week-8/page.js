"use client";

import { useState, useEffect } from "react";

const getRandomDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
};

const getDogBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return Object.keys(data.message); // Object.keys returns an array of the object's keys
};

const getBreedImage = async (breed) => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const data = await response.json();
  console.log(data);
  return data.message;
};

export default function Page() {
  const [dogUrl, setDogUrl] = useState(null);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  const loadRandomDog = async () => {
    const url = await getRandomDog();
    setDogUrl(url);
  };

  const loadBreeds = async () => {
    const breeds = await getDogBreeds();
    setBreeds(breeds);
  };

  const loadBreedImage = async (breed) => {
    const breedImage = await getBreedImage(breed);

    setDogUrl(breedImage);
  };

  useEffect(() => {
    loadRandomDog();
    loadBreeds();
  }, []); // [] means this effect will only run once, after the first render

  useEffect(() => {
    if (selectedBreed === "") return;
    loadBreedImage(selectedBreed);
  }, [selectedBreed]);

  return (
    <main>
      <h1>Week 7</h1>
      <p>Random dog</p>
      <img src={dogUrl} alt="Random dog" />
      <select
        className="text-black"
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </main>
  );
}
