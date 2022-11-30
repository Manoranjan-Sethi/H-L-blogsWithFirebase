import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const googleSignIn = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="login">
      <p>Sign In With Google</p>
      <button className="login-btn" onClick={googleSignIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
