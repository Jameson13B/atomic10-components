import React from "react";
import "./SimpleCard.css";

var SimpleCard = function SimpleCard(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      paragraph = _ref.paragraph,
      click = _ref.click,
      brdColor = _ref.brdColor,
      bkColor = _ref.bkColor,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "30%" : _ref$width;
  return React.createElement("div", {
    className: "a10-simple-card",
    onClick: click,
    style: {
      width: width,
      borderColor: brdColor,
      background: bkColor
    }
  }, React.createElement("div", {
    className: "a10-title"
  }, title), React.createElement("div", {
    className: "a10-subtitle"
  }, subTitle), React.createElement("div", {
    className: "a10-paragraph"
  }, paragraph));
};

export default SimpleCard;