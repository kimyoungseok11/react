const REMOVE = "counter/REMOVE";
const ADD = "counter/ADD";
const TOGGLE = "counter/TOGGLE";

export const remove = (id) => ({ type: REMOVE, id });
export const add = (id, text) => ({ type: ADD, id, text });
export const toggle = (id) => ({ type: TOGGLE, id });

const initialState = {
  todos: [
    { id: 1, text: "눈사람", isActive: false },
    { id: 2, text: "얼음", isActive: false },
    { id: 3, text: "눈", isActive: false },
    { id: 4, text: "바람", isActive: false },
  ],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case ADD:
      const newElement = {
        id: action.id,
        text: action.text,
        isActive: false,
      };
      return {
        ...state,
        todos: state.todos.concat(newElement),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          isActive: todo.id === action.id ? !todo.isActive : todo.isActive,
        })),
      };
    default:
      return state;
  }
}
