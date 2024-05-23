import React from "react";
import "./index.css";

const Second = () => {
  return (
    <div className="page">
      <div>
        <img className="logo" src="/new_jeep.png" alt="" />
        <h1 className="name">KAPYOT</h1>
      </div>
      <div className="container">
        <div className="email">
          <input type="email" placeholder="Email/Mobile Number" />
        </div>
        <div className="password">
          <input type="password" placeholder="Password" />
        </div>
        <div className="login-button">
          <input type="text" placeholder="Login" />
        </div>
        <div className="create-account-button">
          <input type="text" placeholder="Create Account" />
        </div>
      </div>
    </div>
  );
};

export default Second;
