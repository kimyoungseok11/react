import React from "react";
import "../css/TodoList.css";
import TodoItem from "./TodoItem";

const TodoLIst = (props) => {
  const itemList = props.list.map((item) => (
    <li key={item.id}>
      <TodoItem name={item.name}></TodoItem>
    </li>
  ));

  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
};

export default TodoLIst;
