import React, { useContext } from "react";
import style from "../css/SlideComponent.module.css";
import { surveyResultContext } from "../contexts/SurveyResult";
import { submitSurveyList, returnSubmitResult } from "../utils/apiCall";

const SlideComponent = (props) => {
  console.log(props.data);
  const { questionId, questionSubTitle } = props.data;
  const { surveyList, changeSurveyResult } = useContext(surveyResultContext);
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

  const subQuestion = props.subQdata.filter((data) => {
    return questionId === data.questionPreNumber;
  });
  console.log(subQuestion);
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
    const resultData = await returnSubmitResult(paramData);
    console.log(resultData);
  };

  if (questionId === props.questionLength) {
    return (
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
        >
          결과 확인
        </button>
      </div>
    );
  } else {
    return (
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
    );
  }
};

export default SlideComponent;
