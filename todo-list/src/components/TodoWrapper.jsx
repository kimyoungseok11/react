import React from "react";
import styles from "../css/TodoWrapper.module.css";
import TodoHeader from "./TodoHeader";
import TodoListWrapper from "./TodoListWrapper";
import { DarkModeProvider } from "../context/todoListContext";
import { MenuListProvider } from "../context/MenuListContext";

const TodoWrapper = () => {
  return (
    <div className={styles.todoWrapper}>
      <DarkModeProvider>
        <MenuListProvider>
          <TodoHeader />
          <TodoListWrapper />
        </MenuListProvider>
      </DarkModeProvider>
    </div>
  );
};

export default TodoWrapper;
