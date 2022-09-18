import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem 3rem 1rem 0;
`;

const Category = styled(NavLink)`
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  &:hover {
    font-weight: 600;
  }
  &.active {
    font-weight: 600;
    color: "#495057";
  }
`;

const Categories = () => {
  return (
    <div>
      <CategoriesBlock>
        {categories.map((category) => (
          <Category
            key={category.name}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to={category.name === "all" ? "/" : `/${category.name}`}
          >
            {category.text}
          </Category>
        ))}
      </CategoriesBlock>
    </div>
  );
};

export default Categories;
