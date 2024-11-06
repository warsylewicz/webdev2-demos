"use client";

import { useState, useEffect } from "react";
import { getBlogPost } from "../_services/blog-service";

export default function Page({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { id } = await params;
      const post = await getBlogPost(id);
      setPost(post);
      setLoading(false);
    };
    fetchPost();
  }, []);

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold m-6 text-center text-blue-700">
            {post.title}
          </h1>
          <div className="text-xl m-6">{post.content}</div>
        </div>
      )}
    </main>
  );
}
