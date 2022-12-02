import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import "./CreatePost.css";
import { db, auth } from "./../../firebase";
import { useNavigate } from "react-router-dom";

function EditPost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState("");

  const postCollection = collection(db, "posts");
  const navigate = useNavigate();

  const generatePost = async () => {
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
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPost">
      <div className="main">
        <h2>Edit Post</h2>
        <div className="flex">
          <h3>Title</h3>
          <input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex">
          <h3>Post</h3>
          <textarea
            placeholder="Post"
            onChange={(e) => setPosts(e.target.value)}
          />
        </div>
        <button onClick={generatePost}>Edit</button>
      </div>
    </div>
  );
}

export default EditPost;
