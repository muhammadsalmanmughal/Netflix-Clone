import React from "react";
import "./style.css";

const Footer = (props) => {
  console.log("Footerprops: ", props);
  return (
    <div className="footer-section">
      <div className="footer-section-wrapper">
        <div className="footer">
          <p className="footer-top">Questions? Contact us.</p>
          <ul className="footer-links">
            {props.links.map((item) => {
              return <li className="footer-links-item">{item}</li>;
            })}
          </ul>
          <p className="footer-country">Netflix Pakistan</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
