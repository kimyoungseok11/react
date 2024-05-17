import React, { useContext } from "react";
import style from "../css/ResetBtn.module.css";
import { RecommendContext } from "../contexts/RecommendContext";

const ResetBtn = (props) => {
  const { resetRecommendItem } = useContext(RecommendContext);
  const resetList = props.resetList;
  const resetBtnClick = (resetList) => {
    resetRecommendItem(resetList);
  };

  return (
    <button
      className={style.resetBtn}
      onClick={() => {
        resetBtnClick(resetList);
      }}
    >
      <svg width="26" height="26">
        <g transform="translate(-1513 -297)">
          <path
            fill="#707070"
            d="M1536.18 312.043a.816.816 0 0 0-.815.744 8.878 8.878 0 1 1-9.078-9.565.214.214 0 0 1 .224.219v2.751a.877.877 0 0 0 1.345.738l5.261-3.681a.874.874 0 0 0 0-1.482l-5.255-3.631a.877.877 0 0 0-1.345.738v2.5a.215.215 0 0 1-.213.219 10.455 10.455 0 1 0 10.69 11.33.813.813 0 0 0-.815-.88Z"
          ></path>
          <rect
            width="26"
            height="26"
            fill="none"
            transform="translate(1513 297)"
          ></rect>
        </g>
      </svg>
    </button>
  );
};

export default ResetBtn;
