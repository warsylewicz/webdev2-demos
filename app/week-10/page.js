"use client";

import { useUserAuth } from "./_utils/auth-context";
import { getBlogPosts } from "./_services/blog-service";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getBlogPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <main>
      User: {user?.displayName}
      <br />
      {user ? (
        <button onClick={firebaseSignOut}>Sign Out</button>
      ) : (
        <button onClick={gitHubSignIn}>Sign In</button>
      )}
      <div>
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="text-blue-300 hover:underline">
              <Link href={`/week-10/${post.id}`}>{post.title}</Link>
            </div>
          ))}
      </div>
    </main>
  );
}
