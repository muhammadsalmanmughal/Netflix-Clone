import React from "react";
import { Text, AnimatedImage } from "../../components";
import { Images } from "../../config";

import "./style.css";

const ImageAndText = (props) => {
  console.log("ImageAndTextprops: ", props);
  return (
    <>
      <div className="our-main-section">
        <div className="our-main-section-container">
          <AnimatedImage image={props.img} animation={props.animationImg} />

          <Text.MainSectionText
            title={props.title}
            subtitle={props.subtitle}
            customeStyle={{ padding: "0" }}
          />
        </div>
      </div>
    </>
  );
};
export default ImageAndText;
