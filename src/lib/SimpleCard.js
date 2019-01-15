import React from "react";
import "./SimpleCard.css";

const SimpleCard = ({
  title,
  subTitle,
  paragraph,
  click,
  brdColor,
  bkColor,
  width = "30%"
}) => {
  return (
    <div
      className="a10-simple-card"
      onClick={click}
      style={{ width: width, borderColor: brdColor, background: bkColor }}
    >
      <div className="a10-title">{title}</div>
      <div className="a10-subtitle">{subTitle}</div>
      <div className="a10-paragraph">{paragraph}</div>
    </div>
  );
};

export default SimpleCard;
