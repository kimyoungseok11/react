const REMOVE = "todos/REMOVE";
const TOGGLE = "todos/TOGGLE";
const INSERT = "todos/INSERT";

export const remove = (id) => ({ type: REMOVE, id });
export const toggle = (id) => ({ type: TOGGLE, id });
export const insert = (id, text) => ({ type: INSERT, id, text });

const initialState = {
  todos: [
    { id: 1, text: "리액트의 기초 알아보기", checked: false },
    { id: 2, text: "컴포넌트 스타일링 해보기", checked: false },
    { id: 3, text: "일정 관리 앱 만들어 보기", checked: false },
  ],
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          checked: todo.id === action.id ? !todo.checked : todo.checked,
        })),
      };
    case INSERT:
      const newTodo = {
        id: action.id,
        text: action.text,
        checked: false,
      };
      return {
        ...state,
        todos: state.todos.concat(newTodo),
      };
    default:
      return state;
  }
}

export default todosReducer;
