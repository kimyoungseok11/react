import React from "react";

const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value));
  };
  return (
    <div>
      <h3>{number}</h3>
      <div>
        <input type="number" value={diff} onChange={onChange}></input>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
