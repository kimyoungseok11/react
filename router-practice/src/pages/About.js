import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const detail = searchParam.get("detail");
  const mode = searchParam.get("mode");

  const onToggleDetail = () => {
    setSearchParam({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParam({ detail, mode: nextMode });
  };

  return (
    <div>
      <h2>소개 페이지입니다</h2>
      <div>detail : {detail}</div>
      <div>mode : {mode}</div>
      <button onClick={onToggleDetail}>detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
