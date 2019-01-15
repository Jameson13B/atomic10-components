import React from "react";
import "./AdvancedCard.css";
import "./Button.css";

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

const SecondaryButton = ({ value, click, color = "#FF9933" }) => (
  <div
    className="a10-secondary-button"
    onClick={e => click && click(e)}
    style={{ border: `2px solid ${color}`, color: color }}
  >
    {value}
  </div>
);
