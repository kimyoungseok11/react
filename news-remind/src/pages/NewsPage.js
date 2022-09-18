import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";
  console.log(category);
  return (
    <div>
      <Categories></Categories>
      <NewsList category={category}></NewsList>
    </div>
  );
};

export default NewsPage;
