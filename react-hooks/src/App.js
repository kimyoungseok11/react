import React, { useState } from "react";
import Counter from "./components/Counter.js";
import Info from "./components/Info.js";
import CounterReducer from "./components/CounterReducer.js";
import InfoReducer from "./components/InfoReducer.js";
import Average from "./components/Average.js";
import AverageMemo from "./components/AverageMemo.js";

const App = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Counter></Counter>
      <br></br>
      {visible ? <Info></Info> : <div>visible is false</div>}
      <button onClick={handleVisible}>{visible ? "숨기기" : "보이기"}</button>
      <br></br>
      <CounterReducer></CounterReducer>
      <br></br>
      <InfoReducer></InfoReducer>
      <br></br>
      <Average></Average>
      <br></br>
      <AverageMemo></AverageMemo>
    </div>
  );
};

export default App;
