import React from "react";
import { Images } from "../../config";
import { Row, Col } from "antd";
import { Text, InputFields } from "../../components";

import "./style.css";

const Login = () => {
  const onChangeEmail = (e) => {
    console.log("Input change Email", e.target.value);
  };
  const onChangePass = (e) => {
    console.log("Input change Pass", e.target.value);
  };
  return (
    <Row className="login-wrapper">
      <Col className="login-background">
        <img className="login-background-img" src={Images.Bg_Login} />
      </Col>

      <Col span={24} className="login-header">
        <a href="">
          <img className="login-header-logo" src={Images.Logo} />
        </a>
      </Col>

      <Col span={6} className="login-body">
        <Row className="login-body-content">
          <Col span={24} className="login-body-content-form">
            <Row gutter={[10, 20]}>
              <Col span={24}>
                <Text.HeadingOne
                  text="Sign In"
                  style={{
                    color: "#fff",
                    fontSize: "32px",
                    fontWeight: 700,
                    marginBottom: "28px",
                  }}
                />
              </Col>
              <Col span={24}>
                <InputFields.BasicInputField
                  placeholder="Email or phone number"
                  type="email"
                  className="input-field"
                  onInput={onChangeEmail}
                />
              </Col>
              <Col span={24}>
                <InputFields.BasicInputField
                  placeholder="Password"
                  type="password"
                  className="input-field"
                  onInput={onChangePass}
                />
              </Col>
              <Col span={24}>
                <button>Sign In</button>
              </Col>
            </Row>
          </Col>
          <Col className="login-body-content-others"></Col>
        </Row>
      </Col>
      <div className="login-footer"></div>
    </Row>
  );
};
export default Login;
