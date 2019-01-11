import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ value, click, color }) => (
  <div
    className={`primary-button ${
      color === "maroon" ? "maroon-button" : "teal-button"
    }`}
    onClick={e => click && click(e)}
  >
    {value}
  </div>
);

export default PrimaryButton;

// Attributes
// value: Button Text
// click: Callback for onClick
// color: teal or maroon(default: teal)
