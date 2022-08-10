import React from "react";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import './style.css'
const Collapsible = () => {
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <Collapse accordion
    expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 90 : 0} />}>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
  );
};
export default Collapsible;
