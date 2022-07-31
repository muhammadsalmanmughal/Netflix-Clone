import React from "react";
import { Row, Col, Input, Button } from "antd";

import './style.css'
const Getstarted = () => {
  return (
    <Row style={{width:'100%'}} align='middle' justify="center">
      <Col xs={24} sm={24} md={16} lg={16}  className="getstarted-input">
        <Input
          type="text"
          placeholder="Email address"
          size="large"
        />
      </Col>
      <Col
      span={8}
       xs={13} sm={12} md={8} lg={8} 
       className="getstarted-button">
      <Button  size="large">Get Started</Button>
      </Col>
    </Row>
  );
};
export default Getstarted;
