import React, { Fragment } from "react";
import common from "../css/common.module.css";
import ContentsBox from "../components/ContentsBox";
import CategoryList from "../components/CategoryList";
import { category } from "../utils/categoryAttr";
import { BuyProvider, BuyContext } from "../contexts/BuyContext";

const Buy = () => {
  const categoryList = category.buy.categories;
  return (
    <Fragment>
      <BuyProvider>
        <h2 className={common.title}>헬스케어 기능 식물 검색 및 추천</h2>
        <ContentsBox text={`검색할 식물의 유형을 선택해 주세요.`}>
          <CategoryList
            lists={categoryList}
            context={BuyContext}
          ></CategoryList>
        </ContentsBox>
      </BuyProvider>
    </Fragment>
  );
};

export default Buy;
