import { createContext, useState } from "react";

export const RecommendContext = createContext();
export function RecommendProvider({ children }) {
  const [recommendItem, setRecommendItem] = useState({
    currentPage: 1,
    grwhstleCodeNmArr: [],
    managelevelCode: "",
    pagePerRow: 16,
    removalMaterialArr: [],
    plantTypeArr: [],
    price: [],
    recommendedPlaceArr: [],
    smellCode: "",
  });
  const changeRecommendItem = (name, value) => {
    if (typeof recommendItem[name] !== "string") {
      const newArray = [...recommendItem[name], value];
      value !== "휘발성유기화합물"
        ? setRecommendItem({ ...recommendItem, [name]: newArray })
        : setRecommendItem({
            ...recommendItem,
            [name]: "톨루엔제거,자일렌제거",
          });
    } else {
      setRecommendItem({ ...recommendItem, [name]: value });
    }
  };
  return (
    <RecommendContext.Provider value={{ recommendItem, changeRecommendItem }}>
      {children}
    </RecommendContext.Provider>
  );
}
