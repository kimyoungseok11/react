import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Outlet></Outlet>
      <ul>
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/4"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 4
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
