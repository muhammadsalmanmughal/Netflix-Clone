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
          <Col span={24} className="mainsection-container">
            <Row className="mainsection-container-text">
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
                    <Row>
                      <Col span={24} className="mainsection-card-animation" style={{background:'red'}}>
                        <Row align="middle" justify="space-between">
                          <Col xs={4} sm={4} md={4} lg={4} className="mainsection-card-animation-img" style={{background:'blue'}}>
                            <img src={Images.BoxShot} />
                          </Col>
                          <Col xs={14} sm={14} md={14} lg={14} className="mainsection-card-animation-text" style={{background:'green'}}>
                            <Row>
                              <Col span={24}>Stranger Things</Col>
                              <Col span={24}>Downloading...</Col>
                            </Row>
                          </Col>
                          <Col xs={4} sm={4} md={4} lg={4} className="mainsection-card-animation-text-loader" style={{background:'yellow'}}>LOAD</Col>
                        </Row>
                      </Col>
                    </Row>
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
            </Row>
          </Col>
        </>
      )}
    </Row>
  );
};
export default MainSection;
