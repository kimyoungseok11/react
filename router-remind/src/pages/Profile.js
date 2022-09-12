import React from "react";
import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "홍길동전의 주인공",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h2>사용자 프로필</h2>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  );
};

export default Profile;
