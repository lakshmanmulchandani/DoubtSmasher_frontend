
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileForm from "./Pages/Connect/interest";
import ConnectPage from "./Pages/Connect/connect";
import Auth from "./Pages/Auth/Auth";
const AllRoutes = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  const handleProfileSubmit = (profile) => {
    setUserProfiles([...userProfiles, profile]);
  };


  return (
    <Routes>
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
