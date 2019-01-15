import React from "react";
import "./AdvancedCard.css";
import "./Button.css";

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

export default AdvancedCard;

var SecondaryButton = function SecondaryButton(_ref2) {
  var value = _ref2.value,
      click = _ref2.click,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? "#FF9933" : _ref2$color;
  return React.createElement("div", {
    className: "a10-secondary-button",
    onClick: function onClick(e) {
      return click && click(e);
    },
    style: {
      border: "2px solid ".concat(color),
      color: color
    }
  }, value);
};