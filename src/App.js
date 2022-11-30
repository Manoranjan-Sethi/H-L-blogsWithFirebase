import "./App.css";
import { Routes, Route } from "react-router-dom";
// import from "@mui/material/Button";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreatePost from "./Pages/CreatePost";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
