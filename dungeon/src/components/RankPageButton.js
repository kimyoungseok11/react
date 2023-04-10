import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RankButton = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  .rank-label {
    line-height: 50px;
  }
`;
const RankPageButton = () => {
  const navigate = useNavigate();
  const navToRank = () => {
    navigate("/Rankinfo");
  };
  return (
    <RankButton>
      <div className="rank-label" onClick={navToRank}>
        랭킹
      </div>
    </RankButton>
  );
};

export default RankPageButton;
