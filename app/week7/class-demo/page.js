"use client";
import { useState, useEffect } from "react";

async function fetchRandomDog() {
  // https://dog.ceo/api/breeds/image/random

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error);
  }
}

async function fetchBreedList() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return data.message;
}

export default function Page() {
  const [dog, setDog] = useState(null); // [state, setState
  const [breedList, setBreedList] = useState([]); // [state, setState

  async function loadRandomDog() {
    const randomDog = await fetchRandomDog();
    setDog(randomDog);
  }

  async function loadBreedList() {
    const breedList = await fetchBreedList();
    setBreedList(breedList);
    console.log(Object.keys(breedList));
  }

  useEffect(() => {
    loadRandomDog();
    loadBreedList();
  }, []);

  return (
    <main>
      <h1>Dogs!</h1>
      <div>
        <img src={dog}></img>
      </div>
      <div>
        <select name="breed" className="text-black">
          {breedList &&
            Object.keys(breedList).map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
        </select>
      </div>
    </main>
  );
}
