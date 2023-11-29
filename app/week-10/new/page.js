"use client";

import { addBlogPost } from "../_services/blog-service.js";
import { useUserAuth } from "../_utils/auth-context.js";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return null;
  }

  return (
    <main>
      <h1>New Post</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { title, content } = e.target.elements;
          await addBlogPost({
            title: title.value,
            content: content.value,
          });
          title.value = "";
          content.value = "";
        }}
      >
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" className="text-black" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" className="text-black" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
