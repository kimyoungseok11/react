import React, { useContext } from "react";
import common from "../css/common.module.css";
import ResetBtn from "./ResetBtn";

const CategoryList = (props) => {
  const { contextItem, changeItem, resetItem } = useContext(props.context);
  const categoryClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    changeItem(name, value);
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
                checked={
                  contextItem?.[list.name] &&
                  contextItem[list.name].includes(list.value)
                }
                onChange={(e) => {
                  categoryClick(e);
                }}
              ></input>
              <label htmlFor={list.id}>{list.text}</label>
            </li>
          ))}
        </ul>
      </div>
      <ResetBtn resetList={resetList} resetItem={resetItem} />
    </div>
  );
};

export default CategoryList;
