import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "./../../firebase";
import "./Home.css";

function Home({ isAuth }) {
  const [list, setList] = useState([]);
  // const [edit, setEdit] = useState(false);
  const postCollection = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postCollection);
    // console.log(data.docs.map((ele) => ({ ...ele.data(), id: ele.id })));
    setList(
      data.docs.map((ele) => ({
        ...ele.data(),
        id: ele.id,
        postId: ele.postId,
      }))
    );
  };

  function handleDelete(id) {
    const delPost = doc(db, "posts", id);
    deleteDoc(delPost);
    window.location.reload();
  }

  // function handleEdit(id) {}

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="homePage">
      {list.map((post) => {
        return (
          <div key={post.author.postId} className="post">
            <div>
              <div>
                <p className="title">{post.title}</p>
                <p className="posts">{post.posts}</p>
              </div>
              <div className="flex_1">
                <div>
                  <p className="author">By {post.author.name}</p>
                </div>
                <div>
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button className="btn-hm">Edit</button>
                  )}
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      className="btn-dl"
                      onClick={() => {
                        handleDelete(post.id);
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
