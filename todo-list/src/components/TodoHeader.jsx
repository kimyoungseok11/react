import React, { useContext } from "react";
import style from "../css/TodoHeader.module.css";
import { IoSunny, IoMoon } from "react-icons/io5";
import { DarkModeContext } from "../context/todoListContext";
import { MenuListContext } from "../context/MenuListContext";
import { setDarkModeStorage } from "../util/darkModeStorage";

const TodoHeader = () => {
  const menus = [
    { id: "1", name: "All" },
    { id: "2", name: "Active" },
    { id: "3", name: "Completed" },
  ];

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { menuNumber, changeMenuNumber } = useContext(MenuListContext);

  return (
    <div
      className={
        !darkMode ? `${style.todoHeader}` : `${style.todoHeader} ${style.light}`
      }
    >
      <div className={style.menuWrapper}>
        <div
          className={style.darkLightIcon}
          onClick={() => {
            toggleDarkMode();
            setDarkModeStorage(!darkMode);
          }}
        >
          {darkMode ? (
            <IoMoon color="#b0734c" size="30" />
          ) : (
            <IoSunny color="#fff" size="30" />
          )}
        </div>
        <ul className={style.menuBox}>
          {menus.map((menu) => (
            <li
              //   className={style.menuText}
              className={
                menuNumber === menu.id
                  ? `${style.menuText} ${style.active}`
                  : `${style.menuText}`
              }
              key={menu.id}
              onClick={() => {
                changeMenuNumber(menu.id);
              }}
            >
              {menu.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoHeader;
