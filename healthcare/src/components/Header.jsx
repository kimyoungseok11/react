import React from "react";
import style from "../css/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menus = [
    { url: "/", text: "추천" },
    { url: "/personal", text: "맞춤추천" },
    { url: "/buy", text: "구매" },
    { url: "/manage", text: "구매후관리" },
    { url: "/subproduct", text: "화분보조제품" },
  ];
  return (
    <div className={style.HeaderWrap}>
      <div className={style.Container}>
        <h1>
          <NavLink className={style.MainLink} to="/">
            헬스케어 기능 활성화를 위한 실내정원 식물 플랫폼
          </NavLink>
        </h1>
        <ul className={style.H_MenuWrap}>
          {menus.map((menu, idx) => (
            <li key={idx}>
              <NavLink
                to={menu.url}
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                {menu.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
