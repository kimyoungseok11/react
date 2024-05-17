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

  const [hashList, setHashList] = useState([]);

  const changeRecommendItem = (name, value) => {
    if (typeof recommendItem[name] !== "string") {
      if (!recommendItem[name].includes(value)) {
        const newArray = [...recommendItem[name], value];
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

  const resetRecommendItem = (resetList) => {
    let newArray = { ...recommendItem };
    resetList.forEach((name) => {
      if (typeof newArray[name] !== "string") {
        newArray = { ...newArray, [name]: [] };
      } else {
        newArray = { ...newArray, [name]: "" };
      }
    });
    setRecommendItem(newArray);
    setHashList([]);
  };

  const changeHashList = (hashArray) => {
    let newArray = [...hashArray];
    setHashList(newArray);
  };

  return (
    <RecommendContext.Provider
      value={{
        recommendItem,
        hashList,
        changeRecommendItem,
        resetRecommendItem,
        changeHashList,
      }}
    >
      {children}
    </RecommendContext.Provider>
  );
}
