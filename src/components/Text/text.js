import React from "react";

const HeadingOne = (props) => {
  console.log("HeadingOneprops: ", props);
  return <h1 {...props}>{props.text}</h1>;
};

const Paragraph = (props) => {
  console.log("Paragraph: ", props);
  return <p {...props}>{props.text}</p>;
};

export { HeadingOne, Paragraph };
