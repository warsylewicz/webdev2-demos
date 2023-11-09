import { db } from "../_utils/firebase"; // import Firebase config

import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  doc,
  where,
} from "firebase/firestore";

// get one blog post by id
export const getBlogPost = async (id) => {
  try {
    const docRef = doc(db, "blog-posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const post = { id: docSnap.id, ...docSnap.data() };
      return post;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error in getBlogPost: ", error);
  }
};

// Fetch all blog posts
export const getBlogPosts = async () => {
  try {
    const blogPostsCollectionRef = collection(db, "blog-posts");
    // const blogPostsQuery = query(blogPostsCollectionRef);

    const blogPostsSnapshot = await getDocs(blogPostsCollectionRef);
    const mappedBlogPosts = blogPostsSnapshot.docs.map((postDoc) => ({
      id: postDoc.id,
      ...postDoc.data(),
    }));

    return mappedBlogPosts;
  } catch (fetchBlogPostsError) {
    console.error("Error in fetchAllBlogPosts: ", fetchBlogPostsError);
  }
};

// add a new blog post
export const addBlogPost = async (post) => {
  try {
    const docRef = await addDoc(collection(db, "blog-posts"), post);
    return docRef.id;
  } catch (error) {
    console.error("Error in addBlogPost: ", error);
  }
};
