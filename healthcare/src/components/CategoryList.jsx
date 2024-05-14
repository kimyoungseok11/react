import React, { useState, useContext } from "react";
import common from "../css/common.module.css";
import ResetBtn from "./ResetBtn";
import { RecommendContext } from "../contexts/RecommendContext";

const CategoryList = (props) => {
  const [selectList, setSelectList] = useState([]);
  const { recommendItem, changeRecommendItem } = useContext(RecommendContext);
  const categoryClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    changeRecommendItem(name, value);
  };
  return (
    <div className={`${common.content} ${common.categoryList}`}>
      <div className={common.categoryWrap}>
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
