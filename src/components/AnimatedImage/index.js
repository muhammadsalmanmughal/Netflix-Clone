import React from "react";
import "./style.css";

const AnimatedImage = (props) => {
  console.log("AnimatedImageprops: ", props);
  return (
    <div className="our-main-section-animated-image-container">
      <img src={props.image} className="main-section-img" />
      {props.video && (
        <div className="our-main-section-animation">
          <video
            className=""
            autoplay="true"
            playsinline="true"
            muted="true"
            loop="true"
          >
            <source src={props.video} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};
export default AnimatedImage;
