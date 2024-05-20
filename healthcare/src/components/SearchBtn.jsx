import React, { useContext } from "react";
import common from "../css/common.module.css";
import { PlantDetailContext } from "../contexts/PlantDetailContext";
import { callData } from "../utils/apiCall";

const SearchBtn = (props) => {
  const { contextItem } = useContext(props.context);
  const { changeDetailData } = useContext(PlantDetailContext);

  const btnClick = async () => {
    const fetchData = await callData(contextItem, 1);
    changeDetailData(fetchData);
  };

  return (
    <button
      className={common.SearchBtn}
      type="button"
      onClick={() => {
        btnClick();
      }}
    >
      <svg width="12" height="12">
        <g fill="#00ab6e">
          <path d="M5.069 1.267a3.8 3.8 0 1 0 3.8 3.8 3.806 3.806 0 0 0-3.8-3.8m0-1.267A5.069 5.069 0 1 1 0 5.069 5.069 5.069 0 0 1 5.069 0Z" />
          <path d="M11.302 12a.7.7 0 0 1-.494-.2L7.771 8.763a.7.7 0 0 1 .987-.987l3.034 3.032A.7.7 0 0 1 11.298 12Z" />
        </g>
      </svg>
      검색
    </button>
  );
};

export default SearchBtn;
