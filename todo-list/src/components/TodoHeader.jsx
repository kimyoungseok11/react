import React, { useContext } from "react";
import style from "../css/TodoHeader.module.css";
import { IoSunny, IoMoon } from "react-icons/io5";
import { DarkModeContext } from "../context/todoListContext";

const TodoHeader = () => {
  const menus = [
    { id: "1", name: "All" },
    { id: "2", name: "Active" },
    { id: "3", name: "Completed" },
  ];

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={style.todoHeader}>
      <div className={style.menuWrapper}>
        <div className={style.darkLightIcon} onClick={() => toggleDarkMode()}>
          {darkMode ? (
            <IoMoon color="#fff" size="30" />
          ) : (
            <IoSunny color="#fff" size="30" />
          )}
        </div>
        <ul className={style.menuBox}>
          {menus.map((menu) => (
            <li className={style.menuText} key={menu.id}>
              {menu.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoHeader;
