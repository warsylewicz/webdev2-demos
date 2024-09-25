"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={increment}
        className="bg-blue-500 hover:bg-blue-700 active:bg-red-300 rounded
        w-32"
      >
        Increment
      </button>
    </div>
  );
}
