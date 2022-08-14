import React from "react";
import TodoInsert from "./TodoInsert";
import "../css/TodoTemplete.css";

const TodoTemplete = () => {
  return (
    <div className="templete">
      <div className="wrapper">
        <TodoInsert></TodoInsert>
      </div>
    </div>
  );
};

export default TodoTemplete;
