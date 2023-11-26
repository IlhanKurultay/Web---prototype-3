import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, firestore } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import ErrorMsg from "./ErrorMsg";
import "../App.css";
const SignUp = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, setError] = useState(null); // State for error message
  /* const [successMessage, setSuccessMessage] = useState(""); */

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const uid = userCredentials.user.uid;
        const userRef = doc(firestore, "users", uid);
        setDoc(userRef, {
          email: email,
        })
          .then(() => {
            console.log("User information successfully stored in Firestore!");
            /* setSuccessMessage("Sign up successful!"); */
          })
          .catch((error) => {
            console.error("Error storing user information: ", error);
          });
      })
      .catch((error) => {
        console.log(error);
        console.log("The user is already in use");
        setError(error.message);
        /*setSuccessMessage("");*/
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
        </div>
      </form>
      {error && <ErrorMsg message={error} />}
    </div>
  );
};

export default SignUp;
