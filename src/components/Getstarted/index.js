import React from "react";
import { Row, Col, Input, Button } from "antd";

import './style.css'
const Getstarted = () => {
  return (
    <Row>
      <Col span={16} className="getstarted-input">
        <Input
          type="text"
          placeholder="Email address"
          size="large"
        />
      </Col>
      <Col span={8} className="getstarted-button">
      <Button  size="large">Get Started</Button>
      </Col>
    </Row>
  );
};
export default Getstarted;
