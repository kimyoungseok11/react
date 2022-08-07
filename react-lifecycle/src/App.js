import React, { useState } from "react";
import LifeCycle from "./components/LifeCycle";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const App = () => {
  const [color, setColor] = useState("#000000");
  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div>
      <button onClick={handleClick}>랜덤 색상</button>
      <LifeCycle color={color}></LifeCycle>
    </div>
  );
};

export default App;
