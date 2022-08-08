import React from "react";
import { Row, Col } from "antd";
import { Text } from "../../components";

import "./style.css";
const MainSectionText = (props) => {
  console.log("Textprops: ", props);
  return (
    <Row className="mainsection">
      <Col xs={24} sm={24} md={24} lg={6} offset={6} className="mainsection-container">
        <Text.MainSectionText title={props.title} subtitle={props.subtitle} style={{justifyContent:'end'}}/>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12}></Col>
    </Row>
  );
};

export default MainSectionText;
