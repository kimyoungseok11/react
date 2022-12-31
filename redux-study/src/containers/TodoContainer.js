import React, { useRef, useState } from "react";
import { remove, add, toggle } from "../modules/todos";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";

const TodoContainer = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const onRemove = (id) => dispatch(remove(id));
  const onAdd = (id, text) => dispatch(add(id, text));
  const onToggle = (id) => dispatch(toggle(id));
  const id = useRef(todos.length + 1);
  const onClick = () => {
    onAdd(id.current, text);
    id.current++;
    setText("");
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input placeholder="text" value={text} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      {todos.map((todo) => (
        <Todos
          key={todo.id}
          onRemove={onRemove}
          text={todo.text}
          id={todo.id}
          isActive={todo.isActive}
          onToggle={onToggle}
        ></Todos>
      ))}
    </div>
  );
};

export default TodoContainer;
