import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CharInputBox = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  input {
  }
  button {
  }
`;

const serverIds = [
  { id: "all", name: "전체" },
  { id: "anton", name: "안톤" },
  { id: "bakal", name: "바칼" },
  { id: "cain", name: "카인" },
  { id: "casillas", name: "카시야스" },
  { id: "diregie", name: "디레지에" },
  { id: "hilder", name: "힐더" },
  { id: "prey", name: "프레이" },
  { id: "siroco", name: "시로코" },
];

const SearchPage = () => {
  const [name, setName] = useState("");
  const [serverId, setServerId] = useState("all");
  const onChange = (e) => {
    const encodeStr = encodeURIComponent(e.target.value);
    console.log(encodeStr);
    setName(encodeStr);
  };
  const onSelect = (e) => {
    setServerId(e.target.value);
  };
  return (
    <div>
      <CharInputBox>
        <select onChange={onSelect}>
          {serverIds.map((serverId) => (
            <option key={serverId.id} value={serverId.id}>
              {serverId.name}
            </option>
          ))}
        </select>
        <input onChange={onChange}></input>
        <Link to={`/charInfo/${serverId}/${name}`}>
          <button>검색</button>
        </Link>
      </CharInputBox>
    </div>
  );
};

export default SearchPage;
