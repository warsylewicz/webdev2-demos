"use client";

import Heading from "./heading";

import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // This is an IIFE (Immediately Invoked Function Expression)
    (async () => {
      try {
        // <-- Try to fetch the data}
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=51.064&longitude=-114.08&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,cloudcover&timezone=auto`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    })(); // <-- Invoke the anonymous function immediately

    return () => {
      // <-- Clean up any side effects
    };
  }, []); // <-- Empty array: Run the effect only once after the initial render

  return (
    <div>
      <Heading title="Current Weather" />

      <div className="ml-8 p-2">
        {/* the ? is optional chaining */}
        <p>
          Temperature:{" "}
          {weather &&
          weather.current?.temperature_2m &&
          weather.current_units?.temperature_2m
            ? weather.current.temperature_2m +
              weather.current_units.temperature_2m
            : "unavailable"}
        </p>
        <p>
          Cloud cover:{" "}
          {weather &&
          weather.current?.cloudcover &&
          weather.current_units?.cloudcover
            ? weather.current.cloudcover + weather.current_units.cloudcover
            : "unavailable"}
        </p>
      </div>
    </div>
  );
}
