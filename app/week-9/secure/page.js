"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return (
      <div>
        <h1>Week 9</h1>
        <p>Go Away!</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Week 9</h1>
      <p>{user.displayName}</p>
    </div>
  );
}
