import React, { useState, useEffect } from "react";
import "./App.css";
//import SignIn from "./components/SignIn";
import { auth, firestore } from "./firebase";
import SignIn from "./components/SignIn";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails";
import { onAuthStateChanged } from "firebase/auth"; /* oplossing voorr dashboard te laten tonnen */
import Dashboard from "./components/Dashboard";
import { doc, setDoc } from "firebase/firestore";
function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  /* oplossing voorr dashboard te laten tonnen */
  useEffect(() => {
    // Set up an observer to listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });

    // Clean up the observer when the component is unmounted
    return () => unsubscribe();
  }, []); // The empty dependency array ensures that this effect runs only once during component mount

  const handleRegisterClick = () => {
    setShowSignUp(true);
  };
  const handleLoginClick = () => {
    setShowSignUp(false);
  };
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Create a Firestore document for the user
      const userRef = doc(firestore, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        // Add additional fields as needed
      });

      console.log("User information successfully stored in Firestore!");
      setAuthUser(user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  const handleSignOut = () => {
    setAuthUser(null);
    setShowSignUp(false);
  };

  return (
    <div className="Desktop">
      <div className="Gradient_radial"></div>
      <div className="MainScreen">
        <h1>NEW ERA OF LOGIN</h1>
        <div className="LoginForm">
          <div className="closing">
            <div className="close"></div>
            <div className="minimize"></div>
            <div className="full"></div>
          </div>
          <div className="nav">
            {authUser ? null : (
              <ul>
                <li
                  className={showSignUp ? "active" : ""}
                  onClick={handleRegisterClick}
                >
                  Register
                </li>
                <li
                  className={showSignUp ? "" : "active"}
                  onClick={handleLoginClick}
                >
                  Login
                </li>
                <li onClick={handleGoogle}>Google</li>
              </ul>
            )}
          </div>
          <div className="sideBar">
            <AuthDetails authUser={authUser} onSignOut={handleSignOut} />
          </div>
          <div className="login">
            {authUser ? <Dashboard /> : showSignUp ? <SignUp /> : <SignIn />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
