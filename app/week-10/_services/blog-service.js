import { db } from "../_utils/firebase"; // import Firebase config

import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
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
    const blogPostsSnapshot = await getDocs(blogPostsCollectionRef);

    // const blogPostsQuery = query(
    //   blogPostsCollectionRef,
    //   where("published", "==", true)
    // );
    // const blogPostsSnapshot = await getDocs(blogPostsQuery);

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

// update a blog post
export const updateBlogPost = async (id, post) => {
  try {
    const docRef = doc(db, "blog-posts", id);
    await setDoc(docRef, post);
  } catch (error) {
    console.error("Error in updateBlogPost: ", error);
  }
};

// delete a blog post
export const deleteBlogPost = async (id) => {
  try {
    const docRef = doc(db, "blog-posts", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error in deleteBlogPost: ", error);
  }
};
