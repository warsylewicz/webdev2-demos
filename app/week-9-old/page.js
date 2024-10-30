"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email}).
          </p>
          <p>
            Please proceed to the <a href="/week-9/secure">secure page</a>.
          </p>
          <button onClick={firebaseSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
}
