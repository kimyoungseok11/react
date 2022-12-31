import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../components/TodoItem";
import { remove, toggle } from "../modules/todos";

const TodoContainer = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();
  const onRemove = (id) => dispatch(remove(id));
  const onToggle = (id) => dispatch(toggle(id));

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoContainer;
