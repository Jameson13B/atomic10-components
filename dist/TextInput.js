import React from "react";
import "./TextInput.css";

var TextInput = function TextInput(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      label = _ref.label,
      value = _ref.value,
      placeholder = _ref.placeholder,
      change = _ref.change,
      name = _ref.name,
      ftColor = _ref.ftColor,
      _ref$bkColor = _ref.bkColor,
      bkColor = _ref$bkColor === void 0 ? "#FF9933" : _ref$bkColor,
      width = _ref.width;
  return React.createElement("div", {
    className: "a10-simple-form-group"
  }, label && React.createElement("label", {
    className: "a10-simple-text-label"
  }, label), React.createElement("input", {
    type: type,
    name: name,
    className: "a10-simple-text-input",
    value: value,
    placeholder: placeholder,
    onChange: function onChange(e) {
      return change && change(e);
    },
    style: {
      width: width,
      color: ftColor,
      borderBottomColor: bkColor
    }
  }));
};

export default TextInput;