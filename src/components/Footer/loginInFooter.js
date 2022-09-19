import React from "react";
import FooterLinks from "./footerLinks";

import "./style.css";

const LoginFooter = (props) => {
  return (
    <div className="site-footer-wrapper">
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

export default LoginFooter;
