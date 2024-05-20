import React, { Fragment } from "react";
import common from "../css/common.module.css";
import ContentsBox from "../components/ContentsBox";
import CategoryList from "../components/CategoryList";
import { category } from "../utils/categoryAttr";
import { BuyProvider, BuyContext } from "../contexts/BuyContext";
import { tableOption } from "../utils/tableAttr";
import SearchTable from "../components/SearchTable";
import SearchBtn from "../components/SearchBtn";
import { PlantDetailProvider } from "../contexts/PlantDetailContext";
import PlantDetail from "../components/PlantDetail";

const Buy = () => {
  const categoryList = category.buy.categories;
  const tableList = tableOption.buy;

  return (
    <Fragment>
      <h2 className={common.title}>헬스케어 기능 식물 구매</h2>
      <BuyProvider>
        <PlantDetailProvider>
          <ContentsBox text={`구매할 식물의 유형을 선택해 주세요.`}>
            <CategoryList
              lists={categoryList}
              context={BuyContext}
            ></CategoryList>
          </ContentsBox>
          <ContentsBox text={`구매할 식물의 속성을 선택해 주세요.`}>
            <SearchTable lists={tableList} context={BuyContext}></SearchTable>
            <SearchBtn context={BuyContext} />
          </ContentsBox>
        </PlantDetailProvider>
      </BuyProvider>
    </Fragment>
  );
};

export default Buy;
