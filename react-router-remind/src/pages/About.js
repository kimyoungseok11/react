import React from "react";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggle = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncrease = () => {
    setSearchParams({ mode: parseInt(mode) + 1, detail });
  };
  return (
    <div>
      about
      <div>쿼리스트링 : {location.search}</div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onToggle}>클릭</button>
      <p>mode : {mode}</p>
      <p>detail : {detail}</p>
    </div>
  );
};

export default About;
