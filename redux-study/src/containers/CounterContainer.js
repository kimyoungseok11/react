import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const { number, diff } = useSelector((state) => ({
    number: state.counterReducer.number,
    diff: state.counterReducer.diff,
  }));
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  return (
    <div>
      <Counter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      ></Counter>
    </div>
  );
};

export default CounterContainer;
