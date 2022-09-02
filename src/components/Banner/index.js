import React from "react";
import { Row, Col } from "antd";
import { Images } from "../../config";
import { Getstarted } from "../../components";

import "./style.css";
import "../../App.css";
const Banner = ({ data }) => {

  return (
    <Row className="banner" align="middle" justify="center">
      <Col span={24}>
        <Row
          align="middle"
          justify="space-evenly"
          className="zero_margin nav_row navbar"
        >
          <Col span={11}>
            <img src={data?.logo} className="nav_logo" />
          </Col>
          <Col span={11}>
            <a className="nav_signin" onClick={() => data.navigateTo()}>
              Sign In
            </a>
          </Col>
        </Row>
      </Col>

      <Col xs={24} sm={24} md={24} lg={14} xl={12}>
        <Row
          className="banner-content"
          align="middle"
          justify="center"
          style={{ padding: "45px" }}
        >
          <Col span={24}>
            <h1 className="banner-mainHeading zero_margin">
              {data?.mainHeading1}
              <br />
              {data?.mainHeading2}
            </h1>
            <h2 className="banner-subHeading">{data?.subHeading}</h2>
            <h3 className="banner-para">{data?.para}</h3>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} className="getstarted">
            <Getstarted />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Banner;
