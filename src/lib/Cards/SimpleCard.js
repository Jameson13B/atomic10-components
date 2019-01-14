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
      className="simple-card"
      onClick={click}
      style={{ width: width, borderColor: brdColor, background: bkColor }}
    >
      <div className="title">{title}</div>
      <div className="subtitle">{subTitle}</div>
      <div className="paragraph">{paragraph}</div>
    </div>
  );
};

export default SimpleCard;

// title: Card title
// subTitle: Card subtitle
// paragraph: Card Paragraph
// click: Callback function for clicking card
// brdColor: Border color
// bkColor: Card background color, accepts hex, rgb, and string(default: White)
// width: Width for card(default: 30%)
