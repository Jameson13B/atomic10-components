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

// Attributes
// value: Button Text
// click: Callback for onClick
// color: Border and font color, accepts hex, rgb, and string(default: Neon Carrot)
