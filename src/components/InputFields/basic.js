import React from "react";
import { Input } from "antd";

const BasicInputField = (props) => {
  return <Input {...props} onChange={(e) => props.onInput(e)} />;
};
export default BasicInputField;
