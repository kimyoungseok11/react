import React, { Fragment } from "react";
import SlideWrap from "../components/SlideWrap";
import { QuestionProvider } from "../contexts/QuestionContext";

const Personal = () => {
  return (
    <Fragment>
      <QuestionProvider>
        <SlideWrap></SlideWrap>
      </QuestionProvider>
    </Fragment>
  );
};

export default Personal;
