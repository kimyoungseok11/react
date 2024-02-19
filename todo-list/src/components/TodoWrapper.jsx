import React from "react";
import styles from "../css/TodoWrapper.module.css";
import TodoHeader from "./TodoHeader";
import TodoListWrapper from "./TodoListWrapper";

const TodoWrapper = () => {
  return (
    <div className={styles.todoWrapper}>
      <TodoHeader />
      <TodoListWrapper />
    </div>
  );
};

export default TodoWrapper;
