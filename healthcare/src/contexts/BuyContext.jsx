import { createContext, useState } from "react";

export const BuyContext = createContext();
export function BuyProvider({ children }) {
  const [contextItem, setContextItem] = useState({
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

  const changeItem = (name, value) => {
    console.log(name, value);
    //배열일 경우
    if (typeof contextItem[name] !== "string") {
      //배열에 값이 포함되어있지 않은 경우에는 아이템 추가
      if (!contextItem[name].includes(value)) {
        if (value === "전체") {
          //전체 항목을 클릭
          setContextItem({ ...contextItem, [name]: [value] });
          setHashList([]);
        } else {
          //전체 항목 이외의 항목을 클릭
          const newArray = [...contextItem[name], value].filter((item) => {
            return item !== "전체";
          });
          setContextItem({ ...contextItem, [name]: newArray });
        }
      } else {
        //배열에 값이 포함되어있으면 아이템 제거
        const newArray = contextItem[name].filter((item) => {
          return item !== value;
        });
        setContextItem({ ...contextItem, [name]: newArray });
      }
    } else {
      //배열이 아닐 경우
      setContextItem({ ...contextItem, [name]: value });
    }
    console.log(contextItem);
  };

  const resetItem = (resetList) => {
    let newArray = { ...contextItem };
    resetList.forEach((name) => {
      if (typeof newArray[name] !== "string") {
        newArray = { ...newArray, [name]: [] };
      } else {
        newArray = { ...newArray, [name]: "" };
      }
    });
    setContextItem(newArray);
    setHashList([]);
  };

  const changeHashList = (hashArray) => {
    let newArray = [...hashArray];
    setHashList(newArray);
  };

  return (
    <BuyContext.Provider
      value={{ contextItem, hashList, changeItem, resetItem, changeHashList }}
    >
      {children}
    </BuyContext.Provider>
  );
}
