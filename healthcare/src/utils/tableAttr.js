export const tableOption = {
  recommend: {
    lines: [
      {
        th: "제거 대상 물질",
        td: [
          { id: "allMaterialRemoval", name: "allMaterialRemoval" },
          {
            id: "volatilityRemoval",
            name: "removalMaterialArr",
            value: "휘발성유기화합물",
          },
          {
            id: "frmldRemoval",
            name: "removalMaterialArr",
            value: "포름알데히드제거",
          },
          {
            id: "carbonMnxRemoval",
            name: "removalMaterialArr",
            value: "일산화탄소제거",
          },
        ],
      },
      {
        th: "식물타입",
        td: [
          { id: "allPlantType", name: "allPlantType" },
          {
            id: "leafPlant",
            name: "plantTypeArr",
            value: "잎보기식물",
          },
          {
            id: "flowerPlant",
            name: "plantTypeArr",
            value: "꽃보기식물",
          },
          {
            id: "fruitPlant",
            name: "plantTypeArr",
            value: "열매보기식물",
          },
        ],
      },
    ],
  },
};
