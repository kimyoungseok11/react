import React, { useState } from "react";

const LoopPractice = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextNumber, setNextNumber] = useState(5);

  const nameList = names.map((item) => {
    return (
      <li key={item.id}>
        {item.text}{" "}
        <button
          onClick={() => {
            onRemove(item.id);
          }}
        >
          삭제
        </button>
      </li>
    );
  });

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextNumber,
      text: inputText,
    });
    setNames(nextNames);
    setInputText("");
    setNextNumber(nextNames + 1);
  };

  const onRemove = (id) => {
    console.log(id);
    const nextNames = names.filter((item) => item.id !== id);
    setNames(nextNames);
  };

  return (
    <div>
      <input onChange={onChange} value={inputText}></input>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default LoopPractice;
