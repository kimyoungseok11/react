import React, { useReducer, useState } from "react";
import style from "../css/TodoListWrapper.module.css";
import todoListReducer from "../reducer/todoListReducer";

const TodoListWrapper = () => {
  const initialList = [{ name: "ddd" }];
  const [todoItems, dispatch] = useReducer(todoListReducer, initialList);
  const [addItem, setAddItem] = useState("");
  const handleInputChnage = (e) => {
    setAddItem(e.target.value);
  };
  const handleAddClick = () => {
    dispatch({ type: "add", addItem });
  };
  return (
    <div className={style.listWrapper}>
      <div className={style.listBox}>
        {todoItems.map((item, index) => (
          <div key={index} className={style.todoItem}>
            {item.name}
          </div>
        ))}
      </div>
      <div className={style.footerWrapper}>
        <div className={style.inputWrapper}>
          <input onChange={handleInputChnage} value={addItem} type={"text"} />
          <input onClick={handleAddClick} type={"button"} value="Add" />
        </div>
      </div>
    </div>
  );
};

export default TodoListWrapper;
