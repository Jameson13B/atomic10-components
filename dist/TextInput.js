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
      ftcolor = _ref.ftcolor,
      _ref$bkcolor = _ref.bkcolor,
      bkcolor = _ref$bkcolor === void 0 ? "#FF9933" : _ref$bkcolor,
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
      color: ftcolor,
      borderBottomColor: bkcolor
    }
  }));
};

export default TextInput; // Attributes
// type: Input type(default: text)
// label: Label above input *optional
// value: Input value
// placeholder: Placeholder value
// change: Callback for onChange
// name: Name attribute of input
// ftcolor: Input font color
// bkcolor: Input bottom border color(default: Neon Carrot)
// width: Input width, accepts px, %, and rem