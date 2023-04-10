import React from "react";

const ItemImg = ({ id }) => {
  const style = { width: "38px", height: "38px" };
  const url = `https://img-api.neople.co.kr/df/items/${id}`;
  return (
    <img className="item-img" style={style} src={url} alt="장비 이미지"></img>
  );
};

export default ItemImg;
