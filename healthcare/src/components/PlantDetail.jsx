import React, { Fragment, useContext, useEffect, useState } from "react";
import common from "../css/common.module.css";
import { PlantDetailContext } from "../contexts/PlantDetailContext";
import { RecommendContext } from "../contexts/RecommendContext";
import style from "../css/PlantDetail.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { callData } from "../utils/apiCall";

const PlantDetail = () => {
  const { detailData, changeDetailData } = useContext(PlantDetailContext);
  const { recommendItem } = useContext(RecommendContext);
  const plantlist = detailData.list;
  const totalCount = detailData.total;
  const totalPage = Math.ceil(totalCount / 16); //총 페이지 개수
  const showPageNum = 10;
  const [loading, isLoading] = useState(true);
  const [targetPage, setTargetPage] = useState(1);
  const [pageArr, setPageArr] = useState([]);
  const paging = async (page) => {
    console.log(page);
    const fetchData = await callData(recommendItem, page);
    changeDetailData(fetchData);
  };

  const movePrevPage = () => {
    if (targetPage !== 1) {
      paging(targetPage - 1);
      setTargetPage(targetPage - 1);
    }
  };
  const moveNextPage = () => {
    if (targetPage !== totalPage) {
      paging(targetPage + 1);
      setTargetPage(targetPage + 1);
    }
  };

  useEffect(() => {
    if (Object.keys(detailData).length !== 0) {
      isLoading(false);
      setPageArr(Array.from({ length: totalPage }, (v, i) => i + 1));
    }
  }, [detailData]);

  return (
    <div className={`${common.content}`}>
      {loading ? (
        <div></div>
      ) : (
        <Fragment>
          <p className={style.subTitle}>
            검색 식물 및 추천 식물
            <span className={style.value}>{detailData.total} </span>건
          </p>
          <div className={style.searchResultsWrap}>
            <div
              className={`${style.searchResults} ${style.normalSearchResults}`}
            >
              <ul>
                {plantlist.map((plant, idx) => (
                  <li key={idx}>
                    <button>
                      <img
                        src={`/images/plant/${plant.id}.jpg`}
                        alt={plant.plantKorNm}
                      />
                    </button>
                    <input
                      type="hidden"
                      name="palntId"
                      value={plant.id}
                    ></input>
                    <p>{plant.plantKorNm}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.pagination}>
              <ul id="viewPagingUl">
                <li>
                  <IoIosArrowBack
                    onClick={() => {
                      movePrevPage();
                    }}
                  />
                </li>
                {pageArr.map((page, idx) => (
                  <li
                    className={page === targetPage ? style.active : ""}
                    key={idx}
                    onClick={() => {
                      paging(page);
                      setTargetPage(page);
                    }}
                  >
                    {page}
                  </li>
                ))}
                <li>
                  <IoIosArrowForward
                    onClick={() => {
                      moveNextPage();
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default PlantDetail;
