import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>메인</h2>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">김민준의 소개</Link>
        </li>
        <li>
          <Link to="/profile/gildong">홍길동의 소개</Link>
        </li>
        <li>
          <Link to="/profile/void">없음</Link>
        </li>
        <li>
          <Link to="/articles">기사</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
