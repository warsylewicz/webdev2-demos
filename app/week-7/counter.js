"use client";

import { useState } from "react";

export default function Counter() {
  // const arr = useState(0);
  // const count = arr[0];
  // const setCount = arr[1];
  let [count, setCount] = useState(0);

  const increment = () => {
    // count++; // count = count + 1; do not do this because it will not trigger a re-render
    // alert(count);
    // setCount(count + 1); // setCount(1);
    // setCount(count + 1); // setCount(1);  This will not work because setCount is asynchronous. As such, it will not update the value of count immediately. Therefore, the second call to setCount will not have the updated value of count.

    // update count using function form of setCount
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1); // this will work because the function form of setCount will have the updated value of count
  };

  return (
    <main>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </main>
  );
}
