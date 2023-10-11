"use client";

import { useState, useEffect } from "react";

function RandomDogImage() {
  const [dogImage, setDogImage] = useState(null);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [dogBreed, setDogBreed] = useState(null);

  useEffect(() => {
    async function fetchDogImage() {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      setDogImage(data.message);
    }
    fetchDogImage();
  }, []); // Run the effect only once after the initial render

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const data = await response.json();
      setDogBreeds(Object.keys(data.message));
    })();
  }, []); // Run the effect only once after the initial render

  useEffect(() => {
    alert(`You selected ${dogBreed}`);
  }, [dogBreed]); // Run the effect only when dogBreed changes

  return (
    <div>
      <div>
        Select a breed:
        <select
          className="text-black"
          onChange={(e) => setDogBreed(e.target.value)}
        >
          {dogBreeds.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
      </div>
      {dogImage ? (
        <div>
          <h2>Here&apos;s a random dog image for you:</h2>
          <img src={dogImage} alt="A random dog" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RandomDogImage;
