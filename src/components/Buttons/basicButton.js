import React from "react";
import { Button } from "antd";

const BasicButton = (props) => {
  return <Button {...props}>{props.text}</Button>;
};

export default BasicButton