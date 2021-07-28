import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ handleParentClick, color }) {
  return (
    <div
      className="child"
      onClick={() => handleParentClick(getRandomColor())}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default Child;
