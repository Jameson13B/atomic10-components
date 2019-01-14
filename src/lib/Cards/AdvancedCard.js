import React from "react";
import { SecondaryButton } from "../index";
import "./AdvancedCard.css";

const AdvancedCard = ({
  title,
  subTitle,
  paragraph,
  click,
  brdColor,
  btnClick,
  btnValue,
  btnColor = "#FF9933",
  width = "30%",
  image
}) => {
  return (
    <div
      className="advanced-card"
      onClick={click}
      style={{ width: width, borderColor: brdColor }}
    >
      <img src={image} alt="Missing img property" className="img" />
      <div className="title">{title}</div>
      <div className="subtitle">{subTitle}</div>
      <div className="paragraph">{paragraph}</div>
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
// btnClick: Callback function for button
// btnValue: Button text(this is required for button to show)
// btnColor: Button background color(default: Neon Carrot)
// width: Width for card(default: 30%)
// image: Image for header