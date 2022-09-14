import React from "react";
import { Images } from "../../config";
import { Text, InputFields, Buttons } from "../../components";
import { Checkbox } from "antd";

import "../../App.css";
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
          <div className="login-body-content-actions">
            <Checkbox className="login-rememberMe txt-gray">
              Remember me
            </Checkbox>
            <Text.Paragraph className="login-need-help " text="Need help ?" />
          </div>
          <div className="login-body-content-others">
            <div className="login-body-content-others-signup">
              <Text.Paragraph
                className="txt-gray zero_margin"
                text="New to Netflix?"
              />
              <Text.Paragraph
                className="zero_margin txt-signup"
                text="Sign up now."
              />
            </div>
            <p className="zero_margin txt-gray recaptcha">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            <span className="learn-more">Learn more.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="login-footer"></div>
    </div>
  );
};
export default Login;
