import React from "react";
import { SecondaryButton } from "../index";
import "./AdvancedCard.css";

const AdvancedCard = ({
  title,
  subTitle,
  paragraph,
  click,
  brdColor,
  bkColor,
  btnClick,
  btnValue,
  btnColor = "#FF9933",
  width = "30%",
  image
}) => {
  return (
    <div
      className="a10-advanced-card"
      onClick={click}
      style={{ width: width, borderColor: brdColor, background: bkColor }}
    >
      <img src={image} alt="Missing img property" className="a10-img" />
      <div className="a10-title">{title}</div>
      <div className="a10-subtitle">{subTitle}</div>
      <div className="a10-paragraph">{paragraph}</div>
      {btnValue ? (
        <SecondaryButton click={btnClick} value={btnValue} color={btnColor} />
      ) : null}
    </div>
  );
};

export default AdvancedCard;

// title: Card title
// subTitle: Card subtitle
// paragraph: Card Paragraph
// click: Callback function for clicking card
// brdColor: Border color
// bkColor: Card background color, accepts hex, rgb, and string(default: White)
// btnClick: Callback function for button
// btnValue: Button text(this is required for button to show)
// btnColor: Button background color(default: Neon Carrot)
// width: Width for card(default: 30%)
// image: Image for header
