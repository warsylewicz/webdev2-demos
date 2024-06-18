"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return <p>Go away!</p>;
  }

  return (
    <div>
      <h1>Week 8</h1>
      <p>Hi!</p>
    </div>
  );
}
