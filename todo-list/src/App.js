import React from "react";
import TodoWrapper from "./components/TodoWrapper";

const App = () => {
  const style = {
    backgroundColor: "#484a5a",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="total-background" style={style}>
      <TodoWrapper />
    </div>
  );
};

export default App;
