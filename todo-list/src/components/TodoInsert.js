import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import "../css/TodoInsert.css";
import TodoItem from "./TodoItem";

const TodoInsert = () => {
  const [list, setList] = useState([
    { id: 1, name: "리액트의 기초 알아보기" },
    { id: 2, name: "컴포넌트 스타일링 해보기" },
    { id: 3, name: "일정 관리 앱 만들어보기" },
  ]);

  const [task, setTask] = useState("");
  const [id, setId] = useState(list[list.length - 1]["id"]);
  const deleteLIst = (x) => {
    const newList = list.filter((item) => item.id !== x);
    setList(newList);
  };

  const itemList = list.map((item) => (
    <li key={item.id}>
      <TodoItem name={item.name} id={item.id} getIndex={deleteLIst}></TodoItem>
    </li>
  ));

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    const newItem = {
      id: id + 1,
      name: task,
    };

    const newList = list.concat(newItem);
    setList(newList);
    setId(id + 1);
    setTask("");
    console.log(list);
  };

  return (
    <div>
      <div className="header">일정 관리</div>
      <div className="insert-box">
        <input
          value={task}
          onChange={handleTaskChange}
          placeholder="할 일을 입력하세요"
          className="task-input"
        ></input>
        <button className="plus-button" onClick={handleClick}>
          <MdAdd></MdAdd>
        </button>
      </div>
      <div className="item-box">
        <ul>{itemList}</ul>
      </div>
    </div>
  );
};

export default TodoInsert;
