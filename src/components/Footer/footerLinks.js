import React from "react";

const FooterLinks = (props) => {
  return (
    <>
      <p className="footer-top">{props.footerTop}</p>
      <ul className="footer-links">
        {props.links.map((item) => {
          return <li className="footer-links-item">{item}</li>;
        })}
      </ul>
      <p className="footer-country">{props.footerCountry}</p>
    </>
  );
};
export default FooterLinks;
