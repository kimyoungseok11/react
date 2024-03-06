import React, { useReducer, useState, useContext, useEffect } from "react";
import style from "../css/TodoListWrapper.module.css";
import todoListReducer from "../reducer/todoListReducer";
import { FaTrashAlt } from "react-icons/fa";
import { getTodoList } from "../util/todoLocalStorage.js";
import { DarkModeContext } from "../context/todoListContext";
import { MenuListContext } from "../context/MenuListContext";

const TodoListWrapper = () => {
  // const initialList = [{ index: 1, name: "ddd", isChecked: false }];
  const initialList = getTodoList();
  const [todoItems, dispatch] = useReducer(todoListReducer, initialList);
  const [addItem, setAddItem] = useState("");
  const { darkMode } = useContext(DarkModeContext);
  const { menuNumber } = useContext(MenuListContext);
  const [listCategoryItem, setListCategoryItem] = useState([]);

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

  useEffect(() => {
    if (menuNumber === "1") {
      const newArray = [...todoItems];
      setListCategoryItem(newArray);
    } else if (menuNumber === "2") {
      const newArray = todoItems.filter((todoItem) => {
        return todoItem.isChecked === false;
      });
      setListCategoryItem(newArray);
    } else if (menuNumber === "3") {
      const newArray = todoItems.filter((todoItem) => {
        return todoItem.isChecked === true;
      });
      setListCategoryItem(newArray);
    }
  }, [menuNumber, todoItems]);

  return (
    <div
      className={
        !darkMode
          ? `${style.listWrapper}`
          : `${style.listWrapper} ${style.light}`
      }
    >
      <div className={style.listBox}>
        {listCategoryItem.map((item) => (
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
              <label htmlFor={`check${item.index}`}></label>
              {!darkMode && (
                <div className={style.itemWrapper}>
                  {item.isChecked ? (
                    <span className={style.checkedItem}>{item.name}</span>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </div>
              )}
              {darkMode && (
                <div className={style.itemWrapper}>
                  <label htmlFor={`check${item.index}`}></label>
                  {item.isChecked ? (
                    <span className={`${style.checkedItem} ${style.light}`}>
                      {item.name}
                    </span>
                  ) : (
                    <span className={style.light}>{item.name}</span>
                  )}
                </div>
              )}
            </div>
            {!darkMode ? (
              <FaTrashAlt
                color="#fff"
                className={style.deleteIcon}
                onClick={() => {
                  handleTrashCanClick(item.index);
                }}
              />
            ) : (
              <FaTrashAlt
                color="#757575"
                className={style.deleteIcon}
                onClick={() => {
                  handleTrashCanClick(item.index);
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div
        className={
          !darkMode
            ? `${style.footerWrapper}`
            : `${style.footerWrapper} ${style.light}`
        }
      >
        <div className={style.inputWrapper}>
          <input
            placeholder="Add Todo"
            onChange={handleInputChnage}
            value={addItem}
            type={"text"}
            className={style.todoInput}
          />
          <input
            onClick={handleAddClick}
            className={style.todoButton}
            type={"button"}
            value="Add"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoListWrapper;
