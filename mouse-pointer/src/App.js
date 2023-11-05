import React, { useState } from "react";
import AppMonitor from "./components/AppMonitor";
import AppMentors from "./components/AppMentors";
import AppForm from "./components/AppForm";
import AppTheme from "./components/AppTheme";
import "./App.css";

const App = () => {
  const [xy, setXYaxis] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setXYaxis({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="container" onMouseMove={(e) => onMouseMove(e)}>
      <AppMonitor />
      <AppMentors />
      <AppForm />
      <AppTheme />
      <div
        className="pointer"
        // style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}
      ></div>
    </div>
  );
};

export default App;
