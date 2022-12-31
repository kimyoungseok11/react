import React, { useState, useEffect } from "react";
import User from "./User";

const MyComponents = () => {
  const [input, setInput] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = input;

  useEffect(() => {
    console.log("렌더링 완료");
  }, [name]);

  const [users, setUsers] = useState([
    { id: 1, name: "aaa", nickname: "111", active: false },
    { id: 2, name: "bbb", nickname: "222", active: false },
    { id: 3, name: "ccc", nickname: "333", active: false },
  ]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleOnClick = () => {
    setInput({
      name: "",
      nickname: "",
    });
  };

  let newId = users.length + 1;

  const onChange = () => {
    const newUser = {
      id: newId,
      name: name,
      nickname: nickname,
    };

    setUsers([...users, newUser]);

    setInput({
      name: "",
      nickname: "",
    });

    newId += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      <input
        name="name"
        value={name || ""}
        placeholder="이름"
        onChange={handleOnChange}
      ></input>
      <input
        name="nickname"
        value={nickname || ""}
        placeholder="별명"
        onChange={handleOnChange}
      ></input>
      <button onClick={handleOnClick}>초기화</button>
      <button onClick={onChange}>추가</button>
      <h2>{`name: ${name}, nickname: ${nickname}`}</h2>
      <br />
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        ></User>
      ))}
    </div>
  );
};

export default MyComponents;
