import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";

import Auth from "./Pages/Auth/Auth";
import ChatroomHome from "./Pages/Chatroom/ChatroomHome";
import Chatroom from "./Pages/Chatroom/Chatroom";
import CreateChatroom from "./Pages/Chatroom/CreateChatroom";
import JoinChatroom from "./Pages/Chatroom/JoinChatroom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/chatroom/expand" element = {<Chatroom />} />
      <Route exact path="/chatroom/create" element = {<CreateChatroom />} />
      <Route exact path="/chatroom/join" element = {<JoinChatroom />} />
      <Route exact path="/chatroom" element = {<ChatroomHome />} />
      <Route path='/' element={<Auth />} />
    </Routes>
  );
};

export default AllRoutes;
