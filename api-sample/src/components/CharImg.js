import React from "react";
import styled from "styled-components";

const ImageBox = styled.div`
  .img {
    width: 100%;
  }
  .name-box {
    width: 100%;
    text-align: center;
    label {
      color: #000;
      font-weight: 600;
    }
  }
`;

const CharImg = ({ url, charName }) => {
  return (
    <ImageBox>
      <img className="char-img" src={url} alt="img"></img>
      <div className="name-box">
        <label>{charName}</label>
      </div>
    </ImageBox>
  );
};

export default CharImg;
