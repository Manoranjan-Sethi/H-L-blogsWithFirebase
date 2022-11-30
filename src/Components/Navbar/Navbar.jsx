import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Navbar({ isAuth, setIsAuth }) {
  function logOut() {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  }

  return (
    <div className="header">
      <Link className="link" to="/">
        <h2>Blogs</h2>
      </Link>

      <nav className="navbar">
        <Link className="link-a" to="/">
          Home
        </Link>
        <Link className="link-a" to="/create">
          Create
        </Link>
        {!isAuth ? (
          <Link className="link-a" to="/login">
            Login
          </Link>
        ) : (
          <button onClick={logOut}>Log Out</button>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
