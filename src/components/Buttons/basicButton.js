import React from "react";
import { Button } from "antd";

const BasicButton = (props) => {
  return (
    <div style={props.containerStyle}>
      <Button {...props}>{props.text}</Button>;
    </div>
  );
};

export default BasicButton;
