import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, apiKey, imgURL, fetchApi } from "../lib/api";
import styled from "styled-components";
import CharImg from "../components/CharImg";

const CharInfoBox = styled(Link)`
  width: 200px;
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
  .img-box {
    width: 200px;
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
        const url = `${baseURL}${serverId}/characters?characterName=${name}&wordType=full&limit=50&apikey=${apiKey}`;
        console.log(url);
        const response = await axios.get(url);
        setInfos(response.data.rows);
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
          <CharInfoBox
            key={index}
            to={`/charDetail/${info.serverId}?id=${info.characterId}&equipValue=equipment`}
          >
            <div className="img-box">
              <CharImg
                url={`${imgURL}/df/servers/${info.serverId}/characters/${info.characterId}`}
                charName={info.characterName}
              />
            </div>
          </CharInfoBox>
        ))}
    </div>
  );
};

export default CharInfo;
