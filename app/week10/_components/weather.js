"use client";

import Heading from "./heading";

import { useState, useEffect } from "react";

async function fetchWeatherData() {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=51.064&longitude=-114.08&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,cloudcover&timezone=auto`
  );
  const data = await response.json();
  return data;
}

export default function Weather() {
  const [weather, setWeather] = useState(null);

  async function loadWeather() {
    try {
      const data = await fetchWeatherData();
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadWeather();
  }, []);

  // Destructure the data and rename
  const { temperature_2m: temp, cloudcover: cloudCover } =
    weather?.current || {};
  const { temperature_2m: tempUnit, cloudcover: cloudCoverUnit } =
    weather?.current_units || {};

  return (
    <div>
      <Heading title="Current Weather" />

      <div className="ml-8 p-2">
        <p>
          Temperature:{" "}
          {temp !== null && temp !== undefined && tempUnit
            ? `${temp}${tempUnit}`
            : "unavailable"}
        </p>
        <p>
          Cloud cover:{" "}
          {cloudCover !== null && cloudCover !== undefined && cloudCoverUnit
            ? `${cloudCover}${cloudCoverUnit}`
            : "unavailable"}
        </p>
      </div>
    </div>
  );
}
