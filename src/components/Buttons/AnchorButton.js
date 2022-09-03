import React from "react";

const AnchorButton = (props) => {
  return (
    <a {...props} onClick={props.navigateTo}>
      {props.text}
    </a>
  );
};
export default AnchorButton;
