import React, { useState } from "react";
import "./App.css";
//import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails";
import SignIn from "./components/SignIn";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleRegisterClick = () => {
    setShowSignUp(true);
  };
  const handleLoginClick = () => {
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
              <li>Facebook</li>
              <li>Google</li>
            </ul>
          </div>
          <div className="sideBar">
            <AuthDetails />
          </div>
          <div className="login">{showSignUp ? <SignUp /> : <SignIn />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
