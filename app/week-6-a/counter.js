"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // count = count + 1; // This line is the problem. It should be setCount(count + 1); because count is a state variable and should not be modified directly. Therefore, the state is not updated and the UI is not re-rendered.
    // alert(count);
    // setCount(count + 1);  // setCount(1);
    // setCount(count + 1);  // setCount(1);  // The value of count is not updated yet, so it will be 1 because the previous setCount has not been executed yet. setCount is asynchronous.

    setCount((prevCount) => prevCount + 1); // This is the correct way to update the state. It uses the previous state to calculate the new state. This is a functional update.
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
