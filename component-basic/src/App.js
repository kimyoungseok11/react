import React, { Component } from "react";
import MyComponent from "./components/MyComponent";
import MyClassComponent from "./components/MyClassComponent";
import Counter from "./components/Counter";
import CounterFuctionComponent from "./components/CounterFuctionComponent";

export default class App extends Component {
  render() {
    const number = 9;
    return (
      <div>
        <MyComponent name="props이름" favoriteNumber={number}>
          sss
        </MyComponent>
        <MyClassComponent name="classComponent" favoriteNumber={number}>
          ddd
        </MyClassComponent>
        <Counter></Counter>
        <CounterFuctionComponent></CounterFuctionComponent>
      </div>
    );
  }
}
