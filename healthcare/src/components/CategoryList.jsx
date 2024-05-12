import React, { useState } from "react";
import common from "../css/common.module.css";
import style from "../css/CategoryList.module.css";
import ResetBtn from "./ResetBtn";

const CategoryList = (props) => {
  const [selectList, setSelectList] = useState([]);
  const categoryClick = (e) => {
    console.log(e.target.name);
  };
  return (
    <div className={`${common.content} ${style.categoryList}`}>
      <div className={style.categoryWrap}>
        <ul>
          {props.lists.map((list) => (
            <li key={list.id}>
              <input
                id={list.id}
                type="radio"
                name={list.name}
                value={list.value}
                onClick={(e) => {
                  categoryClick(e);
                }}
              ></input>
              <label htmlFor={list.id}>{list.text}</label>
            </li>
          ))}
        </ul>
      </div>
      <ResetBtn />
    </div>
  );
};

export default CategoryList;
