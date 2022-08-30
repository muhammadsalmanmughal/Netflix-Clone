import React from "react";
import { Row, Col } from "antd";
import { Images } from "../../config";
import "../../App.css";

import "./style.css";
const Navbar = () => {
  return (
    <Row
      align="middle"
      justify="space-evenly"
      className="zero_margin nav_row navbar"
    >
      <Col span={11}>
        <img src={Images.Logo} className="nav_logo" />
      </Col>
      <Col span={11}>
        <a className="nav_signin">Sign In</a>
      </Col>
    </Row>
  );
};
export default Navbar;
