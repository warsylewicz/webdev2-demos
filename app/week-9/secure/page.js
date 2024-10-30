"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return (
      <main>
        <h1>Week 9 Demo</h1>
        <p>You must be logged in to view this page.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Week 9 Demo</h1>
      <p>This is a secure page. Welcome!</p>
    </main>
  );
}
