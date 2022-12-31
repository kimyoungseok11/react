import { combineReducers } from "redux";
import todosReducer from "./todos";

const rootReducer = combineReducers({
  todosReducer,
});

export default rootReducer;
