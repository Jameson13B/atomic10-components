import React from "react";
import "./Button.css";

var SecondaryButton = function SecondaryButton(_ref) {
  var value = _ref.value,
      click = _ref.click,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#FF9933" : _ref$color;
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

export default SecondaryButton; // Attributes
// value: Button Text
// click: Callback for onClick
// color: Border and font color, accepts hex, rgb, and string(default: Neon Carrot)