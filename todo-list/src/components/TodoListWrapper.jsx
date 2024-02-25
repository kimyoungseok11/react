import React, { useReducer, useState } from "react";
import style from "../css/TodoListWrapper.module.css";
import todoListReducer from "../reducer/todoListReducer";
import { FaTrashAlt } from "react-icons/fa";

const TodoListWrapper = () => {
  const initialList = [{ index: 1, name: "ddd", isChecked: false }];
  const [todoItems, dispatch] = useReducer(todoListReducer, initialList);
  const [addItem, setAddItem] = useState("");
  const handleInputChnage = (e) => {
    setAddItem(e.target.value);
  };
  const handleAddClick = () => {
    dispatch({ type: "add", todoItems, addItem });
    setAddItem("");
  };
  const handleCheckBox = (isChecked, index) => {
    dispatch({ type: "update", todoItems, isChecked, index });
    // dispatch({});
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
                onChange={() => {
                  handleCheckBox(item.isChecked, item.index);
                }}
              ></input>
              {item.name}
            </div>
            <FaTrashAlt
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
