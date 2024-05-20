import React, { Fragment, useContext, useEffect, useState } from "react";
import common from "../css/common.module.css";
import { PlantDetailContext } from "../contexts/PlantDetailContext";
import { RecommendContext } from "../contexts/RecommendContext";
import style from "../css/PlantDetail.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { callData, callDetailData } from "../utils/apiCall";

const PlantDetail = () => {
  const { detailData, changeDetailData } = useContext(PlantDetailContext);
  const { contextItem } = useContext(RecommendContext);
  const plantlist = detailData.list;
  const totalCount = detailData.total;
  const totalPage = Math.ceil(totalCount / 16); //총 페이지 개수
  const showPageNum = 10;
  const [loading, isLoading] = useState(true);
  const [targetPage, setTargetPage] = useState(1);
  const [pageArr, setPageArr] = useState([]);
  const [detailPlantInfo, setDetailPlantInfo] = useState({});
  const [space, setSpace] = useState(0);

  //페이지 번호 클릭
  const paging = async (page) => {
    const fetchData = await callData(contextItem, page);
    changeDetailData(fetchData);
  };

  //추천 식물 버튼 클릭
  const btnClick = async (id) => {
    const fetchData = await callDetailData(id);
    setDetailPlantInfo(fetchData);
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

  const spaceInputChange = (e) => {
    setSpace(e.target.value);
  };

  useEffect(() => {
    if (Object.keys(detailData).length !== 0) {
      isLoading(false);
      setPageArr(Array.from({ length: totalPage }, (v, i) => i + 1));
    }
  }, [detailData]);

  return (
    <div className={`${common.content}`} style={{ borderBottom: "none" }}>
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
                    <button
                      onClick={() => {
                        btnClick(plant.id);
                      }}
                    >
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
      {Object.keys(detailPlantInfo).length !== 0 && (
        <div className={style.viewDetailsWrap}>
          <div className={style.viewDetail}>
            <div className={style.imgBox}>
              <img
                src={`/images/plant/${detailPlantInfo.detailPlant.id}.jpg`}
                alt="식물영역"
              />
            </div>
            <div className={style.articleBox}>
              <article>
                <h3>{detailPlantInfo.detailPlant.plantKorNm}</h3>
                <span className={style.detailContents}>
                  {detailPlantInfo.detailPlant.plantEngNm}
                  <br />
                  {detailPlantInfo.detailPlant.botanyNm}
                  <br />
                  {detailPlantInfo.detailPlant.circulationNm}
                </span>
                <div className={style.subDetail}>
                  <p className={style.boldTxt} style={{ display: "block" }}>
                    [비료요구정도]{" "}
                    <span>{detailPlantInfo.detailPlant.frtlzrInfo}</span>
                  </p>
                  <div className={style.boldTxt} style={{ display: "flex" }}>
                    <p>[물주기]</p>
                    <div className={style.appendWrap}>
                      <span style={{ marginLeft: "12px" }}>
                        - 봄 : {detailPlantInfo.detailPlant.spring}
                      </span>
                      <span style={{ marginLeft: "12px" }}>
                        - 여름 : {detailPlantInfo.detailPlant.summer}
                      </span>
                      <span style={{ marginLeft: "12px" }}>
                        - 가을 : {detailPlantInfo.detailPlant.autumn}
                      </span>
                      <span style={{ marginLeft: "12px" }}>
                        - 겨울 : {detailPlantInfo.detailPlant.winter}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
              <div className={style.calculatorWrap}>
                <p className={style.minTitle}>추천 식물 수 계산기</p>
                <div className={style.calculator}>
                  <label>
                    해당공간 넓이{" "}
                    <input
                      type="text"
                      onChange={(e) => {
                        spaceInputChange(e);
                      }}
                      maxLength={10}
                      value={space}
                    ></input>{" "}
                    ㎡
                  </label>
                  <span className={style.arrow_R}></span>
                  <p>
                    추천 식물수
                    <span className={style.value}>{detailData.total}</span>개
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${style.searchResults} ${style.similarPlantResults}`}
          >
            <p className={style.minDetail}>유사식물 </p>
            <ul>
              {detailPlantInfo.similarPlantList.map((similarPlant, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      btnClick(similarPlant.id);
                    }}
                  >
                    <img src={`/images/plant/${similarPlant.id}.jpg`} />
                  </button>
                  <p>{similarPlant.plantKorNm}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantDetail;
