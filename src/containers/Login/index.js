import React from "react";
import { Images } from "../../config";
import { Row, Col } from "antd";
import { Text, InputFields } from "../../components";

import "./style.css";

const Login = () => {
  return (
    <Row className="login-wrapper" >
      <Col className="login-background">
        <img className="login-background-img" src={Images.Bg_Login} />
      </Col>
      <Col span={24} className="login-header">
        <a href="">
          <img className="login-header-logo" src={Images.Logo} />
        </a>
      </Col>
      <Col span={24} className="login-body">
        <Row className="login-body-content" align="center" justify="center">
          <Col className="login-body-content-form">
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
              className='input-field'
            />
            <InputFields.BasicInputField
              placeholder="Password"
              type="password"
              className='input-field'

            />
            <button>Sign In</button>
          </Col>
          <div className="login-body-content-others"></div>
        </Row>
      </Col>
      <div className="login-footer"></div>
    </Row>
  );
};
export default Login;
