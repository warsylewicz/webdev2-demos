"use client";

import React, { useState, useEffect } from "react";

function RandomDogImage() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    async function fetchDogImage() {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      setDogImage(data.message);

      const response2 = await fetch(
        `https://www.disify.com/api/email/your@example`
      );
      const data2 = await response2.json();
      console.log(data2);
    }
    fetchDogImage();
  }, []); // Run the effect only once after the initial render

  return (
    <div>
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
