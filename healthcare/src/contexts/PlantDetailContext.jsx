import { createContext, useState } from "react";

export const PlantDetailContext = createContext();

export function PlantDetailProvider({ children }) {
  const [detailData, setDetailData] = useState({});

  const changeDetailData = (data) => {
    setDetailData(data);
  };
  return (
    <PlantDetailContext.Provider value={{ detailData, changeDetailData }}>
      {children}
    </PlantDetailContext.Provider>
  );
}
