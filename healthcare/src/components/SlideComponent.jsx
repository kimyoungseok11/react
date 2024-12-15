import React, { Fragment } from "react";
import style from "../css/SlideComponent.module.css";

const SlideComponent = (props) => {
  console.log(props);
  const { questionId, questionNumber, questionSubTitle, questionTitle } =
    props.data;

  const subQuestion = props.subQdata.filter((data) => {
    return questionId === data.questionPreNumber;
  });

  console.log(subQuestion);
  return (
    <Fragment>
      <h1 className={style.mainTitle}>{questionSubTitle}</h1>
      {subQuestion.map((data) => (
        <div>
          <label>
            <input
              type="radio"
              name={data.questionTagName}
              value={data.questionTagValue}
            ></input>
            {data.questionTitle}
          </label>
        </div>
      ))}
    </Fragment>
  );
};

export default SlideComponent;
