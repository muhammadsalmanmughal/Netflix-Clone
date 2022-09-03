import React from "react";
import { Collapsible, Getstarted } from "../../components";
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
      <div className="faqs-get-started">
      <h3 className="get-started-para">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
        <Getstarted />
      </div>
    </div>
  );
};
export default SectionFAQS;
