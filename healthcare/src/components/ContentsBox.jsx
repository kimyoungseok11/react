import React from "react";
import style from "../css/ContentsBox.module.css";
import common from "../css/common.module.css";

const ContentsBox = (props) => {
  return (
    <div className={style.contentsBox}>
      <p class={common.subTitle}>{props.text}</p>
      {props.children}
    </div>
  );
};

export default ContentsBox;
