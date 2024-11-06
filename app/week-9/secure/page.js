"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return <div>Unauthorized</div>;
  }

  return (
    <div>
      <h1>Week 9</h1>
      <p>Secure page</p>
    </div>
  );
}
