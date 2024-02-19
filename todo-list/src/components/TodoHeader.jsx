import React from "react";
import style from "../css/TodoHeader.module.css";
import { IoSunny } from "react-icons/io5";

const TodoHeader = () => {
  const menus = [
    { id: "1", name: "All" },
    { id: "2", name: "Active" },
    { id: "3", name: "Completed" },
  ];

  return (
    <div className={style.todoHeader}>
      <div className={style.menuWrapper}>
        <div className={style.darkLightIcon}>
          <IoSunny color="#fff" size="30" />
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
