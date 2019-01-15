import React from "react";
import "./Button.css";

var PrimaryButton = function PrimaryButton(_ref) {
  var value = _ref.value,
      click = _ref.click,
      _ref$bkcolor = _ref.bkcolor,
      bkcolor = _ref$bkcolor === void 0 ? "#FF9933" : _ref$bkcolor,
      _ref$ftcolor = _ref.ftcolor,
      ftcolor = _ref$ftcolor === void 0 ? "white" : _ref$ftcolor;
  return React.createElement("div", {
    className: "a10-primary-button",
    onClick: function onClick(e) {
      return click && click(e);
    },
    style: {
      background: bkcolor,
      color: ftcolor,
      border: "2px solid ".concat(bkcolor)
    }
  }, value);
};

export default PrimaryButton; // Attributes
// value: Button Text
// click: Callback for onClick
// bkcolor: Background color, accepts hex, rgb, and string(default: Neon Carrot)
// ftcolor: Font color, accepts hex, rgb, and string(default: white)