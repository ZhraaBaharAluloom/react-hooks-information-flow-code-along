import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF");

  const handleParentClick = (random) => {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildColor(random);
  };

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child handleParentClick={handleParentClick} color={childColor} />
      <Child handleParentClick={handleParentClick} color={childColor} />
    </div>
  );
}

export default Parent;
