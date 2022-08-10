import React from "react";
import "./style.css";
import "../../App.css";

const MainSectionText = (props) => {
  console.log('MainSectionTextprops: ', props);
  return (
    <div className="our-main-section-text" style={props.customeStyle&& props.customeStyle}>
      <h1 className="title zero_margin">{props.title}</h1>
      <h2 className="subtitle zero_margin">{props.subtitle}</h2>
    </div>
  );
};
export default MainSectionText;
