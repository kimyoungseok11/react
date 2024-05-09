import React, { Fragment } from "react";
import common from "../css/common.module.css";
import ContentsBox from "../components/ContentsBox";
import CategoryList from "../components/CategoryList";
import SearchTable from "../components/SearchTable";
import { category } from "../utils/categoryAttr";
import { tableOption } from "../utils/tableAttr";

const Recommend = () => {
  const categoryList = category.recommend.categories;
  const tableList = tableOption.recommend;

  return (
    <Fragment>
      <h2 class={common.title}>헬스케어 기능 식물 검색 및 추천</h2>
      <ContentsBox text={`검색할 식물의 유형을 선택해 주세요.`}>
        <CategoryList lists={categoryList}></CategoryList>
      </ContentsBox>
      <ContentsBox text={`검색할 식물의 속성을 선택해 주세요.`}>
        <SearchTable lists={tableList}></SearchTable>
      </ContentsBox>
    </Fragment>
  );
};

export default Recommend;
