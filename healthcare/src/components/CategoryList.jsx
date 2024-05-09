import React from "react";
import common from "../css/common.module.css";
import style from "../css/CategoryList.module.css";

const CategoryList = (props) => {
  return (
    <div className={`${common.content} ${style.categoryList}`}>
      <div class={style.categoryWrap}>
        <ul>
          {props.lists.map((list) => (
            <li key={list.id}>
              <input
                id={list.id}
                type="radio"
                name={list.name}
                value={list.value}
              ></input>
              <label for={list.id}>{list.text}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
