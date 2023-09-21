"use client";

import { useState } from "react";
import NewEvent from "./new-event";

export default function Page() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main>
      <NewEvent />
    </main>
  );
}
