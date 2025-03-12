"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);

  return (
    <div>
      <h1>Week 9</h1>
      <p>Page content</p>
      <p>This page is unsecured.</p>
      <p>
        {user ? (
          <button onClick={firebaseSignOut}>Sign Out</button>
        ) : (
          <button onClick={gitHubSignIn}>Sign In</button>
        )}
      </p>
      {user && (
        <p>
          Welcome, {user.displayName}! Your email address is {user.email}. And
          you look like: <img src={user.photoURL} alt={user.displayName} />
        </p>
      )}
    </div>
  );
}
