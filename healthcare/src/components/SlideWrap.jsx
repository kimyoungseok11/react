import React, { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { callSurveyList } from "../utils/apiCall";
import SlideComponent from "./SlideComponent";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SurveyResultProvider } from "../contexts/SurveyResult";
import { QuestionContext } from "../contexts/QuestionContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SlideWrap = () => {
  const [subQuestion, setSubQuestion] = useState();
  const { questionList, changeQuestionResult } = useContext(QuestionContext);

  useEffect(() => {
    async function fetchData() {
      changeQuestionResult();
      console.log(questionList);
    }

    fetchData();
  }, []);

  if (!questionList.surveyList && !questionList.surveySubList) {
    return <>로딩..</>;
  } else if (questionList.surveyList && questionList.surveySubList) {
    return (
      <SurveyResultProvider>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
          pagination={{ clickable: true }}
        >
          {questionList.surveyList.map((data, idx) => (
            <SwiperSlide key={idx}>
              <SlideComponent
                data={data}
                subQdata={questionList.surveySubList}
                key={idx}
                questionLength={questionList.surveyList.length}
              ></SlideComponent>
            </SwiperSlide>
          ))}
        </Swiper>
      </SurveyResultProvider>
    );
  }
};

export default SlideWrap;
