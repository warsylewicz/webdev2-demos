"use client";

import { useState } from "react";

export default function Counter() {
  const [person, setPerson] = useState({ name: "Mario", age: 30 });

  const increment = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>count: {person.age}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
