"use client";

import { addBlogPost } from "../_services/blog-service.js";
import { useUserAuth } from "../_utils/auth-context.js";

export default function Page() {
  const { user } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // get the title and content from the form
    // Note: this is not a React managed form
    const { title, content } = e.target.elements;

    // add the blog post to the database
    await addBlogPost({
      title: title.value,
      content: content.value,
    });

    // clear the form
    title.value = "";
    content.value = "";
  };

  if (!user) {
    return null;
  }

  return (
    <main>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
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
