import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, apiKey, imgURL } from "../lib/api";
import styled from "styled-components";

const CharInfoBox = styled.div`
  width: 200px;
  .img-box {
    width: 100%;
  }
  .name-box {
    width: 100%;
    text-align: center;
  }
`;

const CharInfo = () => {
  const params = useParams();
  const { serverId, name } = params;
  const [loading, setLoading] = useState(false);
  const [infos, setInfos] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `${baseURL}${serverId}/characters?characterName=${name}&apikey=${apiKey}`;
        const response = await axios.get(url);
        setInfos(response.data.rows);
        console.log(response.data.rows);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>대기중</div>;
  }

  if (!infos) {
    return null;
  }
  return (
    <div>
      {infos &&
        infos.map((info, index) => (
          <CharInfoBox key={index}>
            <div className="img-box">
              <img
                src={`${imgURL}/df/servers/${info.serverId}/characters/${info.characterId}`}
                alt="이미지"
              />
            </div>
            <div className="name-box">{info.characterName}</div>
          </CharInfoBox>
        ))}
    </div>
  );
};

export default CharInfo;
