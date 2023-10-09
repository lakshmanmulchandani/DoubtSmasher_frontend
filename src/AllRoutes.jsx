
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProfileForm from "./Pages/Connect/interest";
import ConnectPage from "./Pages/Connect/connect";
import Auth from "./Pages/Auth/Auth";
import ChatroomHome from "./Pages/Chatroom/ChatroomHome";
import Chatroom from "./Pages/Chatroom/Chatroom";
import CreateChatroom from "./Pages/Chatroom/CreateChatroom";
import JoinChatroom from "./Pages/Chatroom/JoinChatroom";
import Profile from "./Pages/Profile/Profile";

const AllRoutes = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  const handleProfileSubmit = (profile) => {
    setUserProfiles([...userProfiles, profile]);
  };


  return (
    <Routes>

      <Route path='/Auth' element={<Auth />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
      <Route exact path='/profile' element={<Profile />} />
      <Route exact path="/chatroom/expand" element = {<Chatroom />} />
      <Route exact path="/chatroom/create" element = {<CreateChatroom />} />
      <Route exact path="/chatroom/join" element = {<JoinChatroom />} />
      <Route exact path="/chatroom" element = {<ChatroomHome />} />
      <Route path='/' element={<Auth />} />
      <Route
        exact
        path="/interest"
        element={<ProfileForm onSubmit={handleProfileSubmit} />}
      />
      <Route
        path="/connect"
        element={<ConnectPage userProfiles={userProfiles} />}
      />

    </Routes>
  );
};

export default AllRoutes;
