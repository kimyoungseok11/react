import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const profile = useSelector((state) => state.profileReducer.profile);
  const profileArray = Object.entries(profile);
  console.log(profileArray);
  return (
    <div>
      <h1>메인 홈</h1>
      <p>처음 보여지는 페이지 입니다</p>
      <Link to="/about">소개 페이지</Link>
      {profileArray.map((profile) => (
        <Link
          key={profile[1].id}
          to={`/profile/${profile[0]}`}
          state={{
            id: profile[1].id,
            name: profile[1].name,
            description: profile[1].description,
          }}
        >{`${profile[0]}의 프로필`}</Link>
      ))}
    </div>
  );
};

export default Home;
