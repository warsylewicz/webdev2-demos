"use client";

import { useState, useEffect } from "react";

async function getRandomImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);
  return data.message;
}

async function getBreedList() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return data.message;
}

export default function Page() {
  const [dog, setDog] = useState(null);
  const [breedList, setBreedList] = useState([]);

  const loadRandomDog = async () => {
    const randomDog = await getRandomImage();
    setDog(randomDog);
  };

  const loadBreedList = async () => {
    const breedListObject = await getBreedList();
    const breedList = Object.keys(breedListObject);
    setBreedList(breedList);
  };

  useEffect(() => {
    loadRandomDog();
    loadBreedList();
  }, []);

  // changeBread function does not need to be inside useEffect. This is because it is not dependent on any state or props.
  const changeBreed = async (event) => {
    const breed = event.target.value;
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const data = await response.json();
    setDog(data.message);
  };

  return (
    <main>
      <h1>Dogs!</h1>
      <div>
        <img src={dog}></img>
      </div>
      <div>
        <select name="breed" className="text-black" onChange={changeBreed}>
          {breedList &&
            breedList.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
        </select>
      </div>
    </main>
  );
}
