import React from "react";
import "./TextInput.css";

const TextInput = ({
  type = "text",
  label,
  value,
  placeholder,
  change,
  width
}) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      placeholder={placeholder}
      onChange={e => change && change(e)}
      style={{ width: width }}
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
// width: Input width, accepts px, %, and rem
