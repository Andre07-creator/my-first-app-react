import React from "react";

const DescLink = (props) => {
  return (
    <div>
      <a href={props.link}>{props.link}</a>
      <p>{props.desc}</p>
    </div>
  );
};
export default DescLink;
