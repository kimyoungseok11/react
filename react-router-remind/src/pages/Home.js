import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      home
      <ul>
        <li>
          <Link to="/profile/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/void">존재하지 않는 유저</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
