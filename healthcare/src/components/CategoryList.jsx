import React, { useContext } from "react";
import common from "../css/common.module.css";
import ResetBtn from "./ResetBtn";
import { RecommendContext } from "../contexts/RecommendContext";

const CategoryList = (props) => {
  const { changeRecommendItem } = useContext(RecommendContext);
  const categoryClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    changeRecommendItem(name, value);
  };

  //리셋 버튼 누를 시 초기화 할 항목
  const resetList = [
    ...new Set(
      props.lists.map((list) => {
        return list.name;
      })
    ),
  ];

  return (
    <div className={`${common.content} ${common.categoryList}`}>
      <div className={common.categoryWrap}>
        <ul>
          {props.lists.map((list) => (
            <li key={list.id}>
              <input
                id={list.id}
                type={list.type}
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
      <ResetBtn resetList={resetList} />
    </div>
  );
};

export default CategoryList;
