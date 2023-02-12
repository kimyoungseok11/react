import React from "react";
import ItemImg from "./ItemImg";
import styled from "styled-components";
import itemNameColor from "../lib/itemNameColor";

const ItemDetailBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
  .slot-name {
    width: 150px;
    text-align: center;
  }
  .item-info {
    width: calc(100% - 100px);
    display: flex;
    justify-content: space-around;
    .item-name {
      width: 300px;
      text-align: center;
      color: ${(props) => itemNameColor[props.itemRarity]};
    }
    .option {
      width: 100px;
    }
  }
`;

const ItemDetail = ({ info, category }) => {
  console.log(info, category);

  if (category === "talismans") {
    return (
      <ItemDetailBox>
        <div className="slot-name">탈리스만</div>
        <div className="item-info">
          <ItemImg id={info.talisman.itemId} />
          <div className="item-name">{info.talisman.itemName}</div>
        </div>
      </ItemDetailBox>
    );
  } else if (category === "flag") {
    return (
      <ItemDetailBox>
        <div className="slot-name">휘장</div>
        <div className="item-info">
          <ItemImg id={info.itemId} />
          <div className="item-name">{info.itemName}</div>
        </div>
      </ItemDetailBox>
    );
  }
  return (
    <ItemDetailBox itemRarity={info.itemRarity}>
      <div className="slot-name">
        {!info.slotName ? "크리쳐" : info.slotName}
      </div>
      <div className="item-info">
        <ItemImg id={info.itemId} />
        <div className="item-name">{info.itemName}</div>
        <div className="option">
          {info.optionAbility
            ? info.optionAbility
            : info.growInfo?.options.map((option) => (
                <span>{option.level} </span>
              ))}
        </div>
      </div>
    </ItemDetailBox>
  );
};

export default ItemDetail;
