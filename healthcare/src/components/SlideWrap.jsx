import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { callSurveyList } from "../utils/apiCall";
import "swiper/css";

const SlideWrap = () => {
  const [question, setQuestion] = useState();
  const [subQuestion, setSubQuestion] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await callSurveyList();
      setQuestion(data.surveyList);
      setSubQuestion(data.surveySubList);
    }

    fetchData();
  }, []);

  if (!question && !subQuestion) {
    return <>로딩..</>;
  } else if (question && subQuestion) {
    return (
      <Fragment>
        <Swiper>{console.log(question)}</Swiper>
      </Fragment>
    );
  }
};

export default SlideWrap;
