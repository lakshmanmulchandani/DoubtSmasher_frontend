
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileForm from "./Pages/Connect/interest";
import ConnectPage from "./Pages/Connect/connect";
import Auth from "./Pages/Auth/Auth";
import ChatroomHome from "./Pages/Chatroom/ChatroomHome";
import Chatroom from "./Pages/Chatroom/Chatroom";
import CreateChatroom from "./Pages/Chatroom/CreateChatroom";
import JoinChatroom from "./Pages/Chatroom/JoinChatroom";

const AllRoutes = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  const handleProfileSubmit = (profile) => {
    setUserProfiles([...userProfiles, profile]);
  };


  return (
    <Routes>
      <Route exact path="/chatroom/expand" element = {<Chatroom />} />
      <Route exact path="/chatroom/create" element = {<CreateChatroom />} />
      <Route exact path="/chatroom/join" element = {<JoinChatroom />} />
      <Route exact path="/chatroom" element = {<ChatroomHome />} />
      <Route path='/' element={<Auth />} />
      <Route
        exact
        path="/interest"
        render={() => <ProfileForm onSubmit={handleProfileSubmit} />}
      />
      <Route
        path="/connect"
        render={() => <ConnectPage userProfiles={userProfiles} />}
      />
    </Routes>
  );
};

export default AllRoutes;
