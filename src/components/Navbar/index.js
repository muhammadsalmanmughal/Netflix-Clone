import React from "react";
import { Row, Col } from "antd";
import { Images } from "../../config";
import "../../App.css";

import "./style.css";
const Navbar = () => {
  return (
    <Row
      gutter={[10, 10]}
      align="middle"
      justify="space-between"
      className="zero_margin"
    >
      <Col span={4}>
        <img src={Images.Logo} className="nav_logo" />
      </Col>
    </Row>
  );
};
export default Navbar;
