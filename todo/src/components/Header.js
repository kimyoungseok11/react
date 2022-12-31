import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/Header.css";
import { insert } from "../modules/todos";

const Header = () => {
  const [text, setText] = useState("");
  const todosLength = useSelector((state) => state.todosReducer.todos.length);
  const dispatch = useDispatch();
  const onInsert = (id, text) => dispatch(insert(id, text));
  const id = useRef(todosLength);
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    onInsert(id.current + 1, text);
    setText("");
    id.current++;
  };
  return (
    <div className="header">
      <div className="header-text">일정관리</div>
      <div className="search">
        <input
          className="input-text"
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={onChange}
        ></input>
        <div className="plus-btn" onClick={onClick}>
          +
        </div>
      </div>
    </div>
  );
};

export default Header;
