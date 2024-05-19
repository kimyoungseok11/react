export const tableOption = {
  recommend: {
    lines: [
      {
        th: "제거 대상 물질",
        tds: [
          {
            id: "allMaterialRemoval",
            name: "removalMaterialArr",
            value: "전체",
            text: "전체",
          },
          {
            id: "volatilityRemoval",
            name: "removalMaterialArr",
            value: "톨루엔제거,자일렌제거",
            text: "휘발성유기화합물",
          },
          {
            id: "frmldRemoval",
            name: "removalMaterialArr",
            value: "포름알데히드제거",
            text: "포름알데히드제거",
          },
          {
            id: "carbonMnxRemoval",
            name: "removalMaterialArr",
            value: "일산화탄소제거",
            text: "일산화탄소제거",
          },
        ],
      },
      {
        th: "식물타입",
        tds: [
          {
            id: "allPlantType",
            name: "plantTypeArr",
            value: "전체",
            text: "전체",
          },
          {
            id: "leafPlant",
            name: "plantTypeArr",
            value: "잎보기식물",
            text: "잎보기식물",
          },
          {
            id: "flowerPlant",
            name: "plantTypeArr",
            value: "꽃보기식물",
            text: "꽃보기식물",
          },
          {
            id: "fruitPlant",
            name: "plantTypeArr",
            value: "열매보기식물",
            text: "열매보기식물",
          },
        ],
      },
      {
        th: "가격대",
        tds: [
          { id: "allPrice", name: "price", value: "전체", text: "전체" },
          {
            id: "price001",
            name: "price",
            value: "001",
            text: "~1만원",
          },
          {
            id: "price002",
            name: "price",
            value: "002",
            text: "1~3만원",
          },
          {
            id: "price003",
            name: "price",
            value: "003",
            text: "3~5만원",
          },
          {
            id: "price004",
            name: "price",
            value: "004",
            text: "5~7만원",
          },
          {
            id: "price005",
            name: "price",
            value: "005",
            text: "7~10만원",
          },
          {
            id: "price006",
            name: "price",
            value: "006",
            text: "10~15만원",
          },
          {
            id: "price007",
            name: "price",
            value: "007",
            text: "15~20만원",
          },
          {
            id: "price008",
            name: "price",
            value: "008",
            text: "20~30만원",
          },
          {
            id: "price009",
            name: "price",
            value: "009",
            text: "30만원~",
          },
        ],
      },
      {
        th: "추천장소",
        tds: [
          {
            id: "allRecommendPlace",
            name: "recommendedPlaceArr",
            value: "전체",
            text: "전체",
          },
          {
            id: "allPlaceRcmd",
            name: "recommendedPlaceArr",
            value: "모든장소",
            text: "모든 장소",
          },
          {
            id: "livingRoomRcmd",
            name: "recommendedPlaceArr",
            value: "사무공간",
            text: "사무공간",
          },
          {
            id: "bedRoomRcmd",
            name: "recommendedPlaceArr",
            value: "침실",
            text: "침실",
          },
          {
            id: "kitchenRcmd",
            name: "recommendedPlaceArr",
            value: "주방",
            text: "주방",
          },
          {
            id: "bathRoomRcmd",
            name: "recommendedPlaceArr",
            value: "화장실",
            text: "화장실",
          },
          {
            id: "studyRoomRcmd",
            name: "recommendedPlaceArr",
            value: "공부방",
            text: "공부방",
          },
          {
            id: "verandaRcmd",
            name: "recommendedPlaceArr",
            value: "베란다",
            text: "베란다",
          },
          {
            id: "balconyRcmd",
            name: "recommendedPlaceArr",
            value: "발코니",
            text: "발코니",
          },
          {
            id: "windowRcmd",
            name: "recommendedPlaceArr",
            value: "창가",
            text: "창가",
          },
          {
            id: "sickHouseSyndrome",
            name: "recommendedPlaceArr",
            value: "새집증후군",
            text: "새집증후군",
          },
        ],
      },
    ],
  },
  buy: {
    lines: [
      {
        th: "제거 대상 물질",
        tds: [
          {
            id: "allMaterialRemoval",
            name: "allMaterialRemoval",
            value: "전체",
            text: "전체",
          },
          {
            id: "volatilityRemoval",
            name: "removalMaterialArr",
            value: "톨루엔제거,자일렌제거",
            text: "휘발성유기화합물",
          },
          {
            id: "frmldRemoval",
            name: "removalMaterialArr",
            value: "포름알데히드제거",
            text: "포름알데히드제거",
          },
          {
            id: "carbonMnxRemoval",
            name: "removalMaterialArr",
            value: "일산화탄소제거",
            text: "일산화탄소제거",
          },
        ],
      },
      {
        th: "식물타입",
        tds: [
          {
            id: "allPlantType",
            name: "allPlantType",
            value: "전체",
            text: "전체",
          },
          {
            id: "leafPlant",
            name: "plantTypeArr",
            value: "잎보기식물",
            text: "잎보기식물",
          },
          {
            id: "flowerPlant",
            name: "plantTypeArr",
            value: "꽃보기식물",
            text: "꽃보기식물",
          },
          {
            id: "fruitPlant",
            name: "plantTypeArr",
            value: "열매보기식물",
            text: "열매보기식물",
          },
        ],
      },
      {
        th: "가격대",
        tds: [
          { id: "allPrice", name: "allPrice", value: "전체", text: "전체" },
          {
            id: "price001",
            name: "price",
            value: "001",
            text: "~1만원",
          },
          {
            id: "price002",
            name: "price",
            value: "002",
            text: "1~3만원",
          },
          {
            id: "price003",
            name: "price",
            value: "003",
            text: "3~5만원",
          },
          {
            id: "price004",
            name: "price",
            value: "004",
            text: "5~7만원",
          },
          {
            id: "price005",
            name: "price",
            value: "005",
            text: "7~10만원",
          },
          {
            id: "price006",
            name: "price",
            value: "006",
            text: "10~15만원",
          },
          {
            id: "price007",
            name: "price",
            value: "007",
            text: "15~20만원",
          },
          {
            id: "price008",
            name: "price",
            value: "008",
            text: "20~30만원",
          },
          {
            id: "price009",
            name: "price",
            value: "009",
            text: "30만원~",
          },
        ],
      },
      {
        th: "추천장소",
        tds: [
          {
            id: "allRecommendPlace",
            name: "allRecommendPlace",
            value: "전체",
            text: "전체",
          },
          {
            id: "allPlaceRcmd",
            name: "recommendedPlaceArr",
            value: "모든장소",
            text: "모든 장소",
          },
          {
            id: "livingRoomRcmd",
            name: "recommendedPlaceArr",
            value: "사무공간",
            text: "사무공간",
          },
          {
            id: "bedRoomRcmd",
            name: "recommendedPlaceArr",
            value: "침실",
            text: "침실",
          },
          {
            id: "kitchenRcmd",
            name: "recommendedPlaceArr",
            value: "주방",
            text: "주방",
          },
          {
            id: "bathRoomRcmd",
            name: "recommendedPlaceArr",
            value: "화장실",
            text: "화장실",
          },
          {
            id: "studyRoomRcmd",
            name: "recommendedPlaceArr",
            value: "공부방",
            text: "공부방",
          },
          {
            id: "verandaRcmd",
            name: "recommendedPlaceArr",
            value: "베란다",
            text: "베란다",
          },
          {
            id: "balconyRcmd",
            name: "recommendedPlaceArr",
            value: "발코니",
            text: "발코니",
          },
          {
            id: "windowRcmd",
            name: "recommendedPlaceArr",
            value: "창가",
            text: "창가",
          },
          {
            id: "sickHouseSyndrome",
            name: "recommendedPlaceArr",
            value: "새집증후군",
            text: "새집증후군",
          },
        ],
      },
    ],
  },
};
