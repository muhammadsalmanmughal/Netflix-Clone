import React from "react";
import { Row, Col } from "antd";
import { Text } from "../../components";

import "./style.css";
const TextAndImage = (props) => {
  return (
    <Row className="mainsection">
      <Col span={24} className="mainsection-container">
        <Row className="mainsection-container-text">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            // span={7}
            //   style={{background:'red'}}
            className="mainsection-text"
          >
            <Text.MainSectionText
              title={props.title}
              subtitle={props.subtitle}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            // span={8}
            //   style={{background:'blue'}}
          >
            <Row>
              <Col span={24}>
                <img src={props.img} className="img" />
              </Col>
              {props.video && (
                <Col span={24} className="videoBox">
                  <video
                    className="video"
                    autoplay="true"
                    playsinline="true"
                    muted="true"
                    loop="true"
                  >
                    <source src={props.video} type="video/mp4" />
                  </video>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default TextAndImage;
