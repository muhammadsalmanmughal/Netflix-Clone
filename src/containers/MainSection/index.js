import React from "react";
import { Row, Col } from "antd";
import { Text } from "../../components";
import { Images } from "../../config";

import "./style.css";

const MainSection = (props) => {
  console.log("props: ", props);
  return (
    <Row className="mainsection" align="middle" justify="space-evenly">
      {props.textIndex === "1" ? (
        <>
          <Col
            span={7}
            //   style={{background:'red'}}
          >
            <Text.MainSectionText
              title={props.title}
              subtitle={props.subtitle}
            />
          </Col>
          <Col
            span={8}
            //   style={{background:'blue'}}
          >
            <Row>
              <Col span={24}>
                <img src={props.img} className='img' />
              </Col>
              <Col span={24} className='videoBox'>
                <video
                  className="video"
                  autoplay='true'
                  playsinline="true"
                  muted="true"
                  loop="true"
                >
                  <source src={props.video} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Col>
        </>
      ) : (
        <>
          <Col
            span={8}
            //   style={{background:'blue'}}
          >
            <Row>
              <Col span={24}>
                <img src={props.img} className='img' />
              </Col>
              <Col span={24} className='videoBox'>
                <video
                     className="video"
                     autoplay='true'
                     playsinline="true"
                     muted="true"
                     loop="true"
                >
                  <source src={props.video} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Col>
          <Col
            span={7}
            //   style={{background:'red'}}
          >
            <Text.MainSectionText
              title={props.title}
              subtitle={props.subtitle}
            />
          </Col>
        </>
      )}
    </Row>
  );
};
export default MainSection;
