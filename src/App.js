import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/Login/Login";
import CreatePost from "./Pages/CreatePost/CreatePost";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [editPost, setEditPost] = useState(null);

  return (
    <div className="App">
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} setEditPost={setEditPost} />
      <Routes>
        <Route
          path="/"
          element={<Home isAuth={isAuth} setEditPost={setEditPost} />}
        />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route
          path="/create"
          element={
            <CreatePost
              isAuth={isAuth}
              editPost={editPost}
              setEditPost={setEditPost}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
