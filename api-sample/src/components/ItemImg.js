import React from "react";

const ItemImg = ({ id }) => {
  const url = `https://img-api.neople.co.kr/df/items/${id}`;
  return <img className="item-img" src={url} alt="장비 이미지"></img>;
};

export default ItemImg;
