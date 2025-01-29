import { createContext, useState } from "react";
import { callSurveyList } from "../utils/apiCall";

export const QuestionContext = createContext();

export function QuestionProvider({ children }) {
  const [questionList, setQuestionList] = useState({});
  const [resultData, setResultData] = useState({ total: 0, list: [] });

  const changeQuestionResult = async () => {
    const data = await callSurveyList();
    setQuestionList(data);
  };

  const changeResultSlide = (data) => {
    const newObj = {
      ...questionList,
      surveyList: [...questionList.surveyList, data],
    };
    setQuestionList(newObj);
  };

  const changeResultData = (data) => {
    const newObject = { ...data };
    setResultData(newObject);
  };

  return (
    <QuestionContext.Provider
      value={{
        questionList,
        resultData,
        changeQuestionResult,
        changeResultSlide,
        changeResultData,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
