import React from "react";
import { Images } from "../../config";

import "./style.css";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-background">
        <img className="login-background-img" src={Images.Bg_Login} />
      </div>
      <div className="login-header">
        <a href="">
          <img className="login-header-logo" src={Images.Logo} />
        </a>
      </div>
      <div className="login-body">
        <div className="login-body-content">
          <div className="login-body-content-form">
            <h1>Sign In</h1>
            <input placeholder="email" />
            <input placeholder="password" />
            <button>Sign In</button>
          </div>
          <div className="login-body-content-others"></div>
        </div>
      </div>
      <div className="login-footer"></div>

      <h1>Login</h1>
    </div>
  );
};
export default Login;
