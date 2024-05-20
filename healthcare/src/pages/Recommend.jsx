import React, { Fragment } from "react";
import common from "../css/common.module.css";
import ContentsBox from "../components/ContentsBox";
import CategoryList from "../components/CategoryList";
import SearchTable from "../components/SearchTable";
import SearchBtn from "../components/SearchBtn";
import { category } from "../utils/categoryAttr";
import { tableOption } from "../utils/tableAttr";
import {
  RecommendProvider,
  RecommendContext,
} from "../contexts/RecommendContext";
import { PlantDetailProvider } from "../contexts/PlantDetailContext";
import PlantDetail from "../components/PlantDetail";

const Recommend = () => {
  const categoryList = category.recommend.categories;
  const tableList = tableOption.recommend;

  return (
    <Fragment>
      <h2 className={common.title}>헬스케어 기능 식물 검색 및 추천</h2>
      <RecommendProvider>
        <PlantDetailProvider>
          <ContentsBox text={`검색할 식물의 유형을 선택해 주세요.`}>
            <CategoryList
              lists={categoryList}
              context={RecommendContext}
            ></CategoryList>
          </ContentsBox>
          <ContentsBox text={`검색할 식물의 속성을 선택해 주세요.`}>
            <SearchTable
              lists={tableList}
              context={RecommendContext}
            ></SearchTable>
            <SearchBtn context={RecommendContext} />
          </ContentsBox>
          <PlantDetail />
        </PlantDetailProvider>
      </RecommendProvider>
    </Fragment>
  );
};

export default Recommend;
