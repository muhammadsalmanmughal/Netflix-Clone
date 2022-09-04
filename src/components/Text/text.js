import React from "react";

const HeadingOne = (props) => {
    console.log('HeadingOneprops: ', props);
  return <h1 {...props}>{props.text}</h1>;
};

export { HeadingOne };
