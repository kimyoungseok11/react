import React, { useState } from "react";

const IterationSample2 = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const nameList = names.map((item) => {
    return (
      <li onClick={() => onRemove(item.id)} key={item.id}>
        {item.text}
      </li>
    );
  });

  const onRemove = (id) => {
    const nextNames = names.filter((item) => item.id !== id);
    setNames(nextNames);
  };

  return (
    <div>
      <input onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample2;
