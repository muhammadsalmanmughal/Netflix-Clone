import React from "react";
import FooterLinks from "./footerLinks";

import "./style.css";

const Footer = (props) => {
  return (
    <div className="footer-section-wrapper">
      <div className="footer">
        <FooterLinks
          links={props.links}
          footerTop={props.footerTop}
          footerCountry={props.footerCountry}
        />
      </div>
    </div>
  );
};

export default Footer;
