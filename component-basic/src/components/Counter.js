import { Component } from "react";
import React from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixNumber: 0,
    };
  }
  render() {
    const { number, fixNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>값이 안 바뀜 {fixNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
              },
              () => {
                alert(number);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
