import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import SuccesMsg from "./SuccesMsg";
import { auth } from "../firebase";

import "../App.css";
const SignUp = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        setSuccessMessage("Sign up successful!");
      })
      .catch((error) => {
        console.log(error);
        setSuccessMessage("");
      });
  };
  return (
    <div>
      <h2>Create account</h2>
      <form onSubmit={signUp} className="form">
        <input
          type="email"
          name="name"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <div className="buttonPages">
          <div className="submit">
            <button type="submit">
              <p>Submit</p>
            </button>
          </div>
          <div className="Login">
            <p>Login</p>
          </div>
        </div>
      </form>
      {successMessage && <SuccesMsg />}
    </div>
  );
};

export default SignUp;
