import React, { useContext, useState, useRef } from "react";
import style from "../css/SlideComponent.module.css";
import { surveyResultContext } from "../contexts/SurveyResult";
import { submitSurveyList, returnSubmitResult } from "../utils/apiCall";
import { QuestionContext } from "../contexts/QuestionContext";
import { callDetailData } from "../utils/apiCall";
import detailPlantStyle from "../css/PlantDetail.module.css";

const SlideComponent = (props) => {
  const { questionId, questionTitle, questionSubTitle } = props.data;
  const { surveyList, changeSurveyResult } = useContext(surveyResultContext);
  const [detailPlantInfo, setDetailPlantInfo] = useState({});
  const genderList = [
    { name: "male", text: "남성" },
    { name: "female", text: "여성" },
  ];

  const ageList = [
    { name: "age-10", text: "10대" },
    { name: "age-20", text: "20대" },
    { name: "age-30", text: "30대" },
    { name: "age-40", text: "40대" },
    { name: "age-50", text: "50대" },
    { name: "age-60", text: "60대 이상" },
  ];
  const navigationNextRef = useRef(null);

  const { questionList, changeResultSlide, resultData, changeResultData } =
    useContext(QuestionContext);
  const subQuestion = props.subQdata.filter((data) => {
    return questionId === data.questionPreNumber;
  });

  const radioClick = (e) => {
    changeSurveyResult({ ...surveyList, [e.target.name]: e.target.value });
  };

  const submitSearch = async () => {
    const fetchData = await submitSurveyList(surveyList);
    const regNum = fetchData.regNumAnswer;
    const paramData = {
      currentPage: 1,
      pagePerRow: 8,
      regNumAnswer: regNum,
    };

    changeResultSlide({
      questionId: questionList.surveyList.length + 1,
      questionTitle: "결과 확인",
      questionSubTitle: "",
    });

    const submitResult = await returnSubmitResult(paramData);
    changeResultData(submitResult);

    const swiperInstance = props.swiperRef.current.swiper;
    const lastIndex = swiperInstance.slides.length - 1; // 마지막 슬라이드 인덱스 계산
    swiperInstance.slideTo(lastIndex);
  };

  const btnClick = async (id) => {
    const fetchData = await callDetailData(id);
    setDetailPlantInfo(fetchData);
  };

  if (questionTitle === "응답자 조사") {
    return (
      <div>
        <h2 className={style.questionTitle}>{questionTitle}</h2>
        <div className={style.questionWrap}>
          <h2 className={style.mainTitle}>당신의 성별을 선택해주세요</h2>
          <div>
            {genderList.map((data, idx) => (
              <label>
                <input
                  type="radio"
                  id={data.name}
                  name="gender"
                  value={idx}
                  className={style.questionRadio}
                  onChange={radioClick}
                ></input>
                <p className={style.questionLabel}>{data.text}</p>
              </label>
            ))}
          </div>
          <h2 className={style.mainTitle}>당신의 연령은 어떻게 되나요?</h2>
          <div>
            {ageList.map((data, idx) => (
              <label>
                <input
                  type="radio"
                  id={data.name}
                  name="age"
                  value={idx}
                  className={style.questionRadio}
                  onChange={radioClick}
                ></input>
                <p className={style.questionLabel}>{data.text}</p>
              </label>
            ))}
          </div>
          <button
            className={style.surveySubmitBtn}
            type="butto"
            onClick={submitSearch}
            ref={navigationNextRef}
          >
            결과 확인
          </button>
        </div>
      </div>
    );
  } else if (questionTitle === "결과 확인") {
    if (resultData) {
      return (
        <div>
          <h2 className={style.questionTitle}>{questionTitle}</h2>
          <div className={style.resultSlideWrap}>
            <div className={style.resultLeftSide}>
              {Object.keys(detailPlantInfo).length !== 0 && (
                <div
                  className={`${style.searchResults} ${style.similarPlantResults}`}
                >
                  <p className={style.minDetail}>다른 친구들도 더 보실래요? </p>
                  <ul>
                    {detailPlantInfo.similarPlantList.map(
                      (similarPlant, idx) => (
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
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className={style.resultRightSide}>
              <div className={style.btnWrap}>
                <div className={style.resultWrap}>
                  {resultData.list.map((item) => {
                    if (item.id <= 2) {
                      return (
                        <div
                          className={style.resultImgBox}
                          onClick={() => {
                            btnClick(item.id);
                          }}
                        >
                          <img
                            className={style.questionImage}
                            src={`/images/plant/${item.id}.jpg`}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
                <div className={style.resultWrap}>
                  {resultData.list.map((item) => {
                    if (item.id > 3) {
                      return (
                        <div className={style.resultTxtBox}>
                          <label>{item.plantKorNm}</label>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
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
                        <span className={detailPlantStyle.detailContents}>
                          {detailPlantInfo.detailPlant.botanyNm}
                          <br />
                          {detailPlantInfo.detailPlant.circulationNm}
                        </span>
                        <div className={style.subDetail}>
                          <p className={style.boldTxt}>
                            <p>[생육 온도]</p>
                            <span>
                              {detailPlantInfo.detailPlant.temperature}
                            </span>
                          </p>
                          <div className={style.boldTxt}>
                            <p>[광 환경]</p>
                            <span>
                              {detailPlantInfo.detailPlant.lighttdemanddoCodeNm
                                .split(", ")
                                .map((elem) => (
                                  <div>{elem}</div>
                                ))}
                            </span>
                          </div>
                        </div>
                        <div className={style.subDetail}>
                          <p className={style.boldTxt}>
                            <p>[상대 습도]</p>
                            <span>{detailPlantInfo.detailPlant.hdCode}</span>
                          </p>
                          <div className={style.boldTxt}>
                            <p>[물주기]</p>
                            <div className={style.appendWrap}>
                              <span style={{ marginLeft: "12px" }}>
                                <div>img</div>
                                <div>봄</div>
                                {/* {detailPlantInfo.detailPlant.spring} */}
                              </span>
                              <span style={{ marginLeft: "12px" }}>
                                <div>img</div>
                                <div>여름</div>
                              </span>
                              <span style={{ marginLeft: "12px" }}>
                                <div>img</div>
                                <div>가을</div>
                              </span>
                              <span style={{ marginLeft: "12px" }}>
                                <div>img</div>
                                <div>겨울</div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h2 className={style.questionTitle}>{questionTitle}</h2>
        <div className={style.questionWrap}>
          <h2 className={style.mainTitle}>
            {questionSubTitle.split("<br/>").map((el) => {
              return <p key={el + Math.random()}>{el}</p>;
            })}
          </h2>
          {subQuestion.map((data) => (
            <div>
              <label>
                <img
                  className={style.questionImage}
                  src={`/images/question/${data.questionId + 1}.jpg`}
                />
                <input
                  type="radio"
                  name={data.questionTagName}
                  value={data.questionTagValue}
                  className={style.questionRadio}
                  onChange={radioClick}
                ></input>
                <p className={style.questionLabel}>{data.questionTitle}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default SlideComponent;
