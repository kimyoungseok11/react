import { combineReducers } from "redux";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  profileReducer,
});

export default rootReducer;
