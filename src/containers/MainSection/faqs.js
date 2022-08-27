import React from "react";
import { Collapsible } from "../../components";
import "./style.css";

const SectionFAQS = (props) => {
  console.log("FAQprops: ", props);
  return (
    <div className="our-main-section">
      <div className="faq-container">
        <h1 className="main-heading">Frequently Asked Questions</h1>
        {props?.QNA.map((item) => {
          return <Collapsible ques={item.question} ans={item.answer} />;
        })}
      </div>
    </div>
  );
};
export default SectionFAQS;
