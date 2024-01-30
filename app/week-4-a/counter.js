"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // useState returns an array with two elements
  // the first element is the current value of the state
  // the second element is a function to update the state

  // never, never, never mutate the state directly
  // count = count + 1; // this is wrong. don't do it. it won't work. it will break your app.

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2 className="text-2xl mt-4">Counter</h2>
      <p>Current value of count is {count}.</p>
      {count > 10 && <p>You have clicked more than 10 times.</p>}
      {count === 5 ? <p>Count is 5.</p> : <p>Count is not 5.</p>}
      <button
        onClick={increment}
        className="bg-blue-500 p-2 m-1 rounded-md hover:bg-blue-300 hover:font-bold active:bg-yellow-400"
      >
        Increment
      </button>
    </div>
  );
}
