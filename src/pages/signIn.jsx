import React, { useState } from "react";
import "./signIn.css";
import { useNavigate } from "react-router-dom";
export const SignInPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  
  const [passwordValue, setPasswordValue] = useState("");
  const [hideState, setHideState] = useState(true);
  const signIn = () => {
    if (inputValue === "aneesha" && passwordValue === "anu")
      navigate("/landingPage?user=aneesha");
    else if (inputValue === "sheffin" && passwordValue === "sheff")
      navigate("/landingPage?user=sheffin");
  };
  const inputUpdate = (event) => {
    setInputValue(event.target.value);
  };
  const passwordState = () => {
    setHideState(!hideState);
  };
  const passwordUpdate = (event) => {
    setPasswordValue(event.target.value);
  };
  const showPassword = () => {
    navigate("/forgotPassword")
  }
  return (
    <div className="container">
      <div className="signin-header">
        <h1>Sign in</h1>
        <p>Stay updated on your professional world</p>
      </div>
      <div className="email-input">
        <input
          value={inputValue}
          onChange={inputUpdate}
          className="text-field"
          type="text"
          placeholder="Email or Phone"
        />
      </div>
      <div className="password-input">
        <input
          value={passwordValue}
          onChange={passwordUpdate}
          className="text-field"
          type={hideState ? "password" : "text"}
          placeholder="Password"
        />
        <p onClick={passwordState}>{hideState ? "show" : "hide"}</p>
      </div>
      <div onClick={showPassword} className="forgot-password">
        <a href="">Forgot password?</a>
      </div>
      <div className="sign-in-button">
        <button onClick={signIn}>Sign in</button>
      </div>
    </div>
  );
};
