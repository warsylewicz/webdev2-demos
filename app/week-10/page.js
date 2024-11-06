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
      <section>
        <h2 className="text-2xl">Week 10 Blog Posts</h2>
        <ul>
          {posts &&
            posts.map((post) => (
              <li
                key={post.id}
                className="m-4 list-disc text-blue-600 hover:underline"
              >
                <Link href={`/week-10/${post.id}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
