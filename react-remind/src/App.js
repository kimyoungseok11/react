import React from "react";
import MyComponents from "./components/MyComponents";
import CounterContainer from "./containers/CounterContainer";

const App = () => {
  return (
    <div>
      <MyComponents></MyComponents>
      <CounterContainer></CounterContainer>
    </div>
  );
};

export default App;
