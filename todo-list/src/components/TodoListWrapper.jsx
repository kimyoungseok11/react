import React, { useReducer, useState, useContext } from "react";
import style from "../css/TodoListWrapper.module.css";
import todoListReducer from "../reducer/todoListReducer";
import { FaTrashAlt } from "react-icons/fa";
import { getTodoList } from "../util/todoLocalStorage.js";
import { DarkModeContext } from "../context/todoListContext";

const TodoListWrapper = () => {
  // const initialList = [{ index: 1, name: "ddd", isChecked: false }];
  const initialList = getTodoList();
  const [todoItems, dispatch] = useReducer(todoListReducer, initialList);
  const [addItem, setAddItem] = useState("");
  const { darkMode } = useContext(DarkModeContext);
  const handleInputChnage = (e) => {
    setAddItem(e.target.value);
  };
  const handleAddClick = () => {
    dispatch({ type: "add", todoItems, addItem });
    setAddItem("");
  };
  const handleCheckBox = (isChecked, index) => {
    dispatch({ type: "update", todoItems, isChecked, index });
  };
  const handleTrashCanClick = (index) => {
    dispatch({ type: "delete", todoItems, index });
  };
  return (
    <div className={style.listWrapper}>
      <div className={style.listBox}>
        {todoItems.map((item) => (
          <div key={item.index} className={style.todoList}>
            <div className={style.todoItems}>
              <input
                type="checkbox"
                id={`check${item.index}`}
                className={style.checkBox}
                checked={item.isChecked}
                onChange={() => {
                  handleCheckBox(item.isChecked, item.index);
                }}
              ></input>
              <label for={`check${item.index}`}></label>
              {item.isChecked ? (
                <span className={style.checkedItem}>{item.name}</span>
              ) : (
                <span>{item.name}</span>
              )}
            </div>
            <FaTrashAlt
              className={style.deleteIcon}
              onClick={() => {
                handleTrashCanClick(item.index);
              }}
            />
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
