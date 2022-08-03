import React from "react";
import { Row, Col } from "antd";
import { Text } from "../../components";
import { Images } from "../../config";

import "./style.css";


const MainSection = (props) => {
  console.log("props: ", props);
  return (
    <Row className="mainsection">
      {props.textIndex === "1" ? (
        <>
          <Col span={24} className='mainsection-container'>
            <Row className="mainsection-container-text">
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                // span={7}
                //   style={{background:'red'}}
                className='mainsection-text'
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
                </Row>
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
                <img src={props.img} className="img" />
              </Col>
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
