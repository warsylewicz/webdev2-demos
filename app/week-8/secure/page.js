"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return <div>Go away!</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.displayName}</h1>
      <p>Your email is {user.email}</p>
      <button onClick={firebaseSignOut}>Sign Out</button>
    </div>
  );
}
