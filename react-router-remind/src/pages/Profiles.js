import React from "react";
import { useParams } from "react-router-dom";

const Profiles = () => {
  const data = {
    velopert: {
      name: "김민준",
      description: "리액트를 좋아하는 개발자",
    },
    gildong: {
      name: "홍길동",
      description: "고전 소설 홍길동전의 주인공",
    },
  };

  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      {profile ? (
        <div>
          <p>이름 : {profile.name}</p>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>없는 유저</p>
      )}
    </div>
  );
};

export default Profiles;
