import React from "react";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";
import { connect } from "react-redux";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <div>
      <Counter
        number={number}
        onIncrease={increaseAsync}
        onDecrease={decreaseAsync}
      ></Counter>
    </div>
  );
};

export default connect(
  (state) => ({
    number: state.counterReducer,
  }),

  { increaseAsync, decreaseAsync }
)(CounterContainer);
