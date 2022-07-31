import React from "react";
import { Row, Col } from "antd";
import { Images } from "../../config";
import { Getstarted } from "../../components";

import "./style.css";
import "../../App.css";
const Banner = () => {
  return (
    <Row className="banner" align="middle" justify="center">
      <Col span={24}>
        <Row
          // gutter={[10, 10]}
          align="middle"
          justify="space-evenly"
          className="zero_margin nav_row navbar"
        >
          <Col span={11}>
            <img src={Images.Logo} className="nav_logo" />
          </Col>
          <Col span={11}>
            <a className="nav_signin">Sign In</a>
          </Col>
        </Row>
      </Col>

      <Col xs={24} sm={24} md={24} lg={14} xl={12}
      //  span={8} 
      // style={{background:'blue'}}
      >
        <Row className="banner-content" align="middle" justify="center" style={{padding:'45px'}}>
          <Col span={24}>
            <h1 className="banner-mainHeading zero_margin">
              Unlimited movies, TV
              <br />
              shows, and more.
            </h1>
            <h2 className="banner-subHeading">
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className="banner-para">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}  className='getstarted'>
            <Getstarted />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Banner;
