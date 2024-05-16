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
  const [loading, isLoading] = useState(true);
  const [targetPage, setTargetPage] = useState(1);

  const paging = async (page) => {
    const fetchData = await callData(recommendItem, page);
    changeDetailData(fetchData);
  };

  useEffect(() => {
    if (Object.keys(detailData).length !== 0) {
      isLoading(false);
    }
    console.log(detailData);
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
                      <img src={`/images/plant/${plant.id}.jpg`} />
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
                  <IoIosArrowBack />
                </li>
                <li
                  onClick={() => {
                    paging(1);
                  }}
                >
                  1
                </li>
                <li
                  onClick={() => {
                    paging(2);
                  }}
                >
                  2
                </li>
                <li
                  onClick={() => {
                    paging(3);
                  }}
                >
                  3
                </li>
                <li
                  onClick={() => {
                    paging(4);
                  }}
                >
                  4
                </li>
                <li
                  onClick={() => {
                    paging(5);
                  }}
                >
                  5
                </li>
                <li>
                  <IoIosArrowForward />
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
