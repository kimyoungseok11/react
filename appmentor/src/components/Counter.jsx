import React from "react";
import { useReducer } from "react";
import counterReducer from "../reducer/counter-reducer";

const Counter = () => {
  const initObject = {
    number: 0,
    changeNum: 1,
  };
  const [numberObj, dispatch] = useReducer(counterReducer, initObject);

  return (
    <div>
      number : {numberObj.number}
      <div>
        <button
          onClick={() => {
            dispatch({ type: "plus", numberObj });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: "minus", numberObj });
          }}
        >
          -
        </button>
        <input
          type="number"
          value={numberObj.changeNum}
          onChange={() => {
            dispatch({ type: "change", numberObj });
          }}
        ></input>
      </div>
    </div>
  );
};

export default Counter;
