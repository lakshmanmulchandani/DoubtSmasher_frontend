import {combineReducers} from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import usersReducer from "./users";
import interestReducer from "./interest";
import chatroomReducer from "./chatroom";

export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
  interestReducer,
  chatrooms: chatroomReducer
});
