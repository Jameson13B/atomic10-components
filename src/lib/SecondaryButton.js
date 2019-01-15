import React from "react";
import "./Button.css";

const SecondaryButton = ({ value, click, color = "#FF9933" }) => (
  <div
    className="a10-secondary-button"
    onClick={e => click && click(e)}
    style={{ border: `2px solid ${color}`, color: color }}
  >
    {value}
  </div>
);

export default SecondaryButton;
