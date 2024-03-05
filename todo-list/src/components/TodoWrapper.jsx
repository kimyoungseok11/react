import React from "react";
import styles from "../css/TodoWrapper.module.css";
import TodoHeader from "./TodoHeader";
import TodoListWrapper from "./TodoListWrapper";
import { DarkModeProvider } from "../context/todoListContext";

const TodoWrapper = () => {
  return (
    <div className={styles.todoWrapper}>
      <DarkModeProvider>
        <TodoHeader />
        <TodoListWrapper />
      </DarkModeProvider>
    </div>
  );
};

export default TodoWrapper;
