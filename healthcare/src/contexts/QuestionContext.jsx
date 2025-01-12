import { createContext, useState } from "react";
import { callSurveyList } from "../utils/apiCall";

export const QuestionContext = createContext();

export function QuestionProvider({ children }) {
  const [questionList, setQuestionList] = useState({});

  const changeQuestionResult = async () => {
    const data = await callSurveyList();
    console.log(data);
    setQuestionList(data);
  };

  const changeResultSlide = (data) => {
    const newObj = {
      ...questionList,
      surveyList: [...questionList.surveyList, data],
    };
    setQuestionList(newObj);
    console.log(questionList);
  };

  return (
    <QuestionContext.Provider
      value={{ questionList, changeQuestionResult, changeResultSlide }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
