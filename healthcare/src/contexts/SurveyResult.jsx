import { createContext, useState } from "react";

export const surveyResultContext = createContext();

export function SurveyResultProvider({ children }) {
  const [surveyList, setSurveyList] = useState({});

  const changeSurveyResult = (data) => {
    setSurveyList(data);
  };
  return (
    <surveyResultContext.Provider value={{ surveyList, changeSurveyResult }}>
      {children}
    </surveyResultContext.Provider>
  );
}
