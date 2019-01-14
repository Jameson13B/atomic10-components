import React from "react";
import "./TextInput.css";

const TextInput = ({
  type = "text",
  label,
  value,
  placeholder,
  change,
  name,
  ftcolor,
  bkcolor = "#FF9933",
  width
}) => (
  <div className="a10-simple-form-group">
    {label && <label className="a10-simple-text-label">{label}</label>}
    <input
      type={type}
      name={name}
      className="a10-simple-text-input"
      value={value}
      placeholder={placeholder}
      onChange={e => change && change(e)}
      style={{ width: width, color: ftcolor, borderBottomColor: bkcolor }}
    />
  </div>
);

export default TextInput;

// Attributes
// type: Input type(default: text)
// label: Label above input *optional
// value: Input value
// placeholder: Placeholder value
// change: Callback for onChange
// name: Name attribute of input
// ftcolor: Input font color
// bkcolor: Input bottom border color(default: Neon Carrot)
// width: Input width, accepts px, %, and rem
