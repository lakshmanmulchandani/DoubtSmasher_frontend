import {combineReducers} from "redux";

import authReducer from "./auth";

import chatroomReducer from "./chatroom";

export default combineReducers({
  authReducer,chatrooms: chatroomReducer
});
