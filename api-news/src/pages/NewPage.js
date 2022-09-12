import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import NewList from "../components/NewList";

const NewPage = () => {
  const params = useParams();
  const category = params.category || "all";
  return (
    <div>
      <Categories></Categories>
      <NewList category={category}></NewList>
    </div>
  );
};

export default NewPage;
