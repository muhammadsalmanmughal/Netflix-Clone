import React from "react";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import "./style.css";
const Collapsible = (props) => {
  console.log("collapsProps: ", props);
  const { Panel } = Collapse;
  return (
    <Collapse
      accordion
      expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 90 : 0} />}
    >
      <Panel header={props.ques} key="1">
        <p>{props.ans}</p>
      </Panel>
    </Collapse>
  );
};
export default Collapsible;
