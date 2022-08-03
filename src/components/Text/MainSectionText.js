import React from "react";
import { Row, Col } from "antd";
import "./style.css";
import '../../App.css'

const MainSectionText = (props) => {
  return (
    <Row gutter={[10, 10]}>
      <Col span={24}>
        <h1 className="title zero_margin">{props.title}</h1>
      </Col>
      <Col span={24}>
        <h2 className="subtitle zero_margin">{props.subtitle}</h2>
      </Col>
    </Row>
  );
};
export default MainSectionText;
