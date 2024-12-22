import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { callSurveyList } from "../utils/apiCall";
import SlideComponent from "./SlideComponent";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper"
        pagination={{ clickable: true }}
      >
        {question.map((data, idx) => (
          <SwiperSlide key={idx}>
            <SlideComponent
              data={data}
              subQdata={subQuestion}
              key={idx}
              questionLength={question.length}
            ></SlideComponent>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default SlideWrap;
