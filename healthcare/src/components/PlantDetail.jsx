import React, { useContext } from "react";
import common from "../css/common.module.css";
import { PlantDetailContext } from "../contexts/PlantDetailContext";

const PlantDetail = () => {
  const { detailData } = useContext(PlantDetailContext);

  return (
    <div className={`${common.content} ${common.categoryList}`}>
      <p className="SubTitle">
        검색 식물 및 추천 식물<span className="value">{detailData.total} </span>
        건
      </p>
    </div>
  );
};

export default PlantDetail;
