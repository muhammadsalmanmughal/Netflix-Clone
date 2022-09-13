import React from "react";
import { Images } from "../../config";
import { Text, InputFields, Buttons } from "../../components";
import { Checkbox } from "antd";

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
            <Text.HeadingOne
              text="Sign In"
              style={{
                color: "#fff",
                fontSize: "32px",
                fontWeight: 700,
                marginBottom: "28px",
              }}
            />
            <InputFields.BasicInputField
              placeholder="Email or phone number"
              type="email"
              className="input-field"
            />
            <InputFields.BasicInputField
              placeholder="Password"
              type="password"
              className="input-field"
            />
            <Buttons.BasicButton text="Sign In" className="login-btnSignIn" />
          </div>
          <div className="login-body-content-others">
            <Checkbox className="login-rememberMe">Remember me</Checkbox>
            <Text.Paragraph className="login-need-help" text='Need help ?'/>
          </div>
        </div>
      </div>
      <div className="login-footer"></div>
    </div>
  );
};
export default Login;
