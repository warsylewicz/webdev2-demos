"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);

  return (
    <div>
      {<h1>Welcome, {user?.displayName}</h1>}
      <p>Your email is {user?.email}</p>
      {user ? (
        <button onClick={firebaseSignOut}>Sign Out</button>
      ) : (
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
}
