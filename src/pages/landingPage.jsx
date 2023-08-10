import React from "react";
import { SignInPage } from "./signIn";
import { useNavigate } from "react-router-dom";


export const LandingPage = () => {
  const navigate = useNavigate();
  const url = new URLSearchParams(window.location.search);
  const user = url.get("user");
  const switchUser = () => {
    if (user === "sheffin" || user === "aneesha") {
      navigate("/");
    }
  };
  const buttonText="back<<<"
  //   console.log(user);
  return (
    <div className="total-container">
      <div className="show-name">{user}</div>
      <button onClick={switchUser}>{buttonText}</button>
    </div>
  );
};
