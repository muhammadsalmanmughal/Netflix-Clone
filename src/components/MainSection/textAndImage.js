import React from "react";
import { Row, Col } from "antd";
import { Text, AnimatedImage } from "../../components";

import "./style.css";
const TextAndImage = (props) => {
  return (
    <div className="our-main-section">
      <div className="our-main-section-container">
        <Text.MainSectionText title={props.title} subtitle={props.subtitle} />
        <AnimatedImage image={props.img} video={props.video} />
      </div>
    </div>
  );
};
export default TextAndImage;
