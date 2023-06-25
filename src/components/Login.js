import React from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";

// style
import style from "./Login.module.css";

// icons
import google from "../assets/google.svg";

const Login = () => {
  return (
    <div className={style.loginPage}>
      <div className={style.login}>
        <h2>Welcome to botogram!</h2>
        <div
          className={style.googleButton}
          onClick={() => {
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
          }}
        >
          <img src={google} alt="google" /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
