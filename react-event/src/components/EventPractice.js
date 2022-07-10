import React, { useState } from "react";

const EventPractice = () => {
  const [state, setstate] = useState({
    username: "",
    message: "",
  });
  const { username, message } = state;

  const handleChange = (e) => {
    const nextForm = {
      ...state,
      [e.target.name]: e.target.value,
    };
    setstate(nextForm);
  };

  const onClick = () => {
    setstate({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={handleChange}
      ></input>

      <input
        type="text"
        name="username"
        placeholder="아무거나 입력"
        value={username}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      ></input>

      <div>{message}</div>
      <div>{username}</div>
      <button onClick={onClick}>값 초기화</button>
    </div>
  );
};

export default EventPractice;
