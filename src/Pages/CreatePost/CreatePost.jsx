import React, { useState, useEffect } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import "./CreatePost.css";
import { db, auth } from "./../../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth, editPost, setEditPost }) {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState("");

  const postCollection = collection(db, "posts");
  const navigate = useNavigate();

  const generatePost = async () => {
    if (editPost) {
      const userDoc = doc(db, "posts", editPost.id);
      const edits = { title, posts };
      updateDoc(userDoc, edits);
      setEditPost(null);
      navigate("/");
    } else {
      await addDoc(postCollection, {
        title,
        posts,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
          postId: `auth.currentUser.${Date.now()}`,
        },
      });
      navigate("/");
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    if (editPost) {
      setTitle(editPost.title);
      setPosts(editPost.posts);
    } else {
      setTitle("");
      setPosts("");
    }
  }, [editPost]);

  return (
    <div className="createPost">
      <div className="main">
        <h2>{editPost ? "Edit" : "Create"} Post</h2>
        <div className="flex">
          <h3>Title</h3>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex">
          <h3>Post</h3>
          <textarea
            placeholder="Post"
            value={posts}
            onChange={(e) => setPosts(e.target.value)}
          />
        </div>
        <button onClick={generatePost}>{editPost ? "Edit" : "Create"}</button>
      </div>
    </div>
  );
}

export default CreatePost;
