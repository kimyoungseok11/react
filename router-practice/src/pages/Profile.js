import React from "react";
import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "홍길동전 주인공",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      {profile ? (
        <div>
          <div>{profile.name}</div>
          <div>{profile.description}</div>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  );
};

export default Profile;
