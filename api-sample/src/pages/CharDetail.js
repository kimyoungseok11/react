import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, useParams, NavLink } from "react-router-dom";
import { baseURL, apiKey, imgURL, fetchApi } from "../lib/api";
import axios from "axios";
import styled from "styled-components";
import CharImg from "../components/CharImg";

const categories = [
  { text: "장착장비", value: "equipment" },
  { text: "아바타", value: "avatar" },
  { text: "크리쳐", value: "creature" },
  { text: "휘장", value: "flag" },
  { text: "탈리스만", value: "tailsman" },
];

const CharContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const CategoryBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
`;

const Category = styled(NavLink)`
  font-style: 1rem;
`;

const CharDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const equipValue = searchParams.get("equipValue");
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const params = useParams();
  const { serverId } = params;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `${baseURL}${serverId}/characters/${id}/equip/equipment?apikey=${apiKey}`;
        const response = await axios.get(url);
        setInfo(response.data);
        console.log(response.data);
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

  if (!info) {
    return null;
  }

  return (
    <div>
      <CharContainer>
        <CharImg
          url={`${imgURL}/df/servers/${serverId}/characters/${info.characterId}`}
          charName={info.characterName}
        />
      </CharContainer>
      <CategoryBox>
        {categories.map((category, index) => (
          <Category
            key={index}
            to={`/charDetail/${serverId}?id=${info.characterId}&equipValue=${category.value}`}
            className="category"
          >
            {category.text}
          </Category>
        ))}
      </CategoryBox>
    </div>
  );
};

export default CharDetail;
