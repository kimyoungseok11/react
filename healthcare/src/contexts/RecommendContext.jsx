import { createContext, useState } from "react";

export const RecommendContext = createContext();
export function RecommendProvider({ children }) {
  const [recommendItem, setRecommendItem] = useState({
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
      if (!recommendItem[name].includes(value)) {
        const newArray =
          value !== "휘발성유기화합물"
            ? [...recommendItem[name], value]
            : [...recommendItem[name], "톨루엔제거,자일렌제거"];
        setRecommendItem({ ...recommendItem, [name]: newArray });
      } else {
        const newArray = recommendItem[name].filter((item) => {
          return item !== value;
        });
        setRecommendItem({ ...recommendItem, [name]: newArray });
      }
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
