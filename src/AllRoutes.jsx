import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";

import Auth from "./Pages/Auth/Auth";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
    </Routes>
  );
};

export default AllRoutes;
