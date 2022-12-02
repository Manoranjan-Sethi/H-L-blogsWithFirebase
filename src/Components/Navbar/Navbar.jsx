import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Navbar({ isAuth, setIsAuth, setEditPost }) {
  const navigate = useNavigate();

  function logOut() {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
      // window.location.pathname = "/login";
    });
  }

  return (
    <div className="header">
      <Link className="link" to="/">
        <h2>Blogs</h2>
      </Link>

      <div>
        <nav className="navbar">
          <Link className="link-a" to="/">
            Home
          </Link>

          {!isAuth ? (
            <Link className="link-a" to="/login">
              Login
            </Link>
          ) : (
            <>
              <Link
                className="link-a"
                onClick={() => setEditPost(null)}
                to="/create"
              >
                Create
              </Link>
              <button onClick={logOut}>Log Out</button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
