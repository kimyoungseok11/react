import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  useEffect(() => {
    console.log("렌더링 완료");
    console.log(name, nickName);
    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, [name]);
  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        onChange={(e) => {
          setNickName(e.target.value);
        }}
      ></input>
      <div>이름 : {name}</div>
      <div>닉네임 : {nickName}</div>
    </div>
  );
};

export default Info;
