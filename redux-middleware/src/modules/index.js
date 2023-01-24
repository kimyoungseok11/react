import counterReducer from "./counter";
import { combineReducers } from "redux";
import sample from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({
  counterReducer,
  sample,
  loading,
});

export default rootReducer;
