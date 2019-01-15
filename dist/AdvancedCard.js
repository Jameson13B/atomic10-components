import React from "react";
import { SecondaryButton } from "./index";
import "./AdvancedCard.css";

var AdvancedCard = function AdvancedCard(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      paragraph = _ref.paragraph,
      click = _ref.click,
      brdColor = _ref.brdColor,
      bkColor = _ref.bkColor,
      btnClick = _ref.btnClick,
      btnValue = _ref.btnValue,
      _ref$btnColor = _ref.btnColor,
      btnColor = _ref$btnColor === void 0 ? "#FF9933" : _ref$btnColor,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "30%" : _ref$width,
      image = _ref.image;
  return React.createElement("div", {
    className: "a10-advanced-card",
    onClick: click,
    style: {
      width: width,
      borderColor: brdColor,
      background: bkColor
    }
  }, React.createElement("img", {
    src: image,
    alt: "Missing img property",
    className: "a10-img"
  }), React.createElement("div", {
    className: "a10-title"
  }, title), React.createElement("div", {
    className: "a10-subtitle"
  }, subTitle), React.createElement("div", {
    className: "a10-paragraph"
  }, paragraph), btnValue ? React.createElement(SecondaryButton, {
    click: btnClick,
    value: btnValue,
    color: btnColor
  }) : null);
};

export default AdvancedCard; // title: Card title
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