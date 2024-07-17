import React from "react";

const Title = ({ title, titleColor }) => {
  return (
    <div className="title">
      <div className={`title-text ${titleColor}`}>
        <h1>{title}</h1>
      </div>
      <div className="banner-underline"></div>
    </div>
  );
};

export default Title;
