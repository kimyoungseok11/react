import React, { useEffect, useState, useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideComponent from "./SlideComponent";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SurveyResultProvider } from "../contexts/SurveyResult";
import { QuestionContext } from "../contexts/QuestionContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SlideWrap = () => {
  const { questionList, changeQuestionResult } = useContext(QuestionContext);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  const swiperOption = {
    spaceBetween: 50,
    slidesPerView: 1,
    onSlideChange: (e) => {
      setMainImageIndex(e.activeIndex);
    },
    modules: [Navigation, Pagination, Scrollbar, A11y],
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.activeIndex = mainImageIndex;
      swiper.navigation.update();
    },
  };

  useEffect(() => {
    async function fetchData() {
      changeQuestionResult();
    }

    fetchData();
  }, []);

  if (!questionList.surveyList && !questionList.surveySubList) {
    return <>로딩..</>;
  } else if (questionList.surveyList && questionList.surveySubList) {
    return (
      <SurveyResultProvider>
        <Swiper {...swiperOption} ref={swiperRef}>
          {questionList.surveyList.map((data, idx) => (
            <SwiperSlide key={idx}>
              <SlideComponent
                data={data}
                subQdata={questionList.surveySubList}
                key={idx}
                questionLength={questionList.surveyList.length}
                swiperOption={swiperOption}
                swiperRef={swiperRef}
              ></SlideComponent>
            </SwiperSlide>
          ))}
        </Swiper>
        <button ref={navigationPrevRef}>이전</button>
        <button ref={navigationNextRef}>다음</button>
      </SurveyResultProvider>
    );
  }
};

export default SlideWrap;
