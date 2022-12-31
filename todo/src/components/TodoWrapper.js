import React from "react";
import Header from "./Header";
import TodoContainer from "../containers/TodoContainer";
import "../css/TodoWrapper.css";

const TodoWrapper = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <TodoContainer></TodoContainer>
    </div>
  );
};

export default TodoWrapper;
