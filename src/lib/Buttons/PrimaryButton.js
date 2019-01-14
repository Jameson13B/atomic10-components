import React from "react";
import "./Button.css";

const PrimaryButton = ({
  value,
  click,
  bkcolor = "#FF9933",
  ftcolor = "white"
}) => (
  <div
    className="a10-primary-button"
    onClick={e => click && click(e)}
    style={{
      background: bkcolor,
      color: ftcolor,
      border: `2px solid ${bkcolor}`
    }}
  >
    {value}
  </div>
);

export default PrimaryButton;

// Attributes
// value: Button Text
// click: Callback for onClick
// bkcolor: Background color, accepts hex, rgb, and string(default: Neon Carrot)
// ftcolor: Font color, accepts hex, rgb, and string(default: white)
