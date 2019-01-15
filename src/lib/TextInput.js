import React from "react";
import "./TextInput.css";

const TextInput = ({
  type = "text",
  label,
  value,
  placeholder,
  change,
  name,
  ftColor,
  bkColor = "#FF9933",
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
      style={{ width: width, color: ftColor, borderBottomColor: bkColor }}
    />
  </div>
);

export default TextInput;
