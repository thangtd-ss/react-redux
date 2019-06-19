import {combineReducers} from "redux";
import todosReducers from "./todosReducers";
import thangReducer from "./thangReducer";

export default combineReducers({
  todosReducers,
  thangReducer
});
