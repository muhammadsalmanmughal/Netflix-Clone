import React from "react";
import "./style.css";

const AnimatedImage = (props) => {
  return (
    <div className="our-main-section-image-container">
      <div className="our-main-section-animated-image-container">
        <img src={props.image} className="main-section-img" />
        {props.video && (
          <div className="our-main-section-animation">
            <video
              className="our-main-section-video"
              autoplay="true"
              playsinline="true"
              muted="true"
              loop="true"
            >
              <source src={props.video} type="video/mp4" />
            </video>
          </div>
        )}
        {props.animation && (
          <div className="our-main-section-card-animation">
            <div className="our-main-section-card-animation-img">
              <img src={props?.animation?.posterImage} />
            </div>
            <div className="our-main-section-card-animation-text">
              <div className="text-0">
                {props?.animation?.animationImgText0}
              </div>
              <div className="text-1">
                {props?.animation?.animationImgText1}
              </div>
            </div>
            <div className="our-main-section-card-animation-text-loader" />
          </div>
        )}
      </div>
    </div>
  );
};
export default AnimatedImage;
