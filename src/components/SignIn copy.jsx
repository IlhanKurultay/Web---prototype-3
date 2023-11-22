import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "../App.css";
const SignIn = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  /* const [errorMessage, setErrorMessage] = useState(""); */
  const singIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={singIn} className="form">
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
        </div>
      </form>
    </div>
  );
};

export default SignIn;
