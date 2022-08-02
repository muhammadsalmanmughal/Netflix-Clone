import React from "react";
import { Row, Col } from "antd";
import { Text } from "../../components";
import { Images } from "../../config";

import "./style.css";

const MainSection = () => {
  return (
    <Row gutter={[10, 10]} className='mainsection'>
      <Col span={12}>
        <Text.MainSectionText
          title="Enjoy on your TV."
          subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        />
      </Col>
      <Col span={12}>
        <img src={Images.TV} />
      </Col>
    </Row>
  );
};
export default MainSection;
