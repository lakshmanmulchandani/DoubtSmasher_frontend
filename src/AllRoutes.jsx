import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";

import Auth from "./Pages/Auth/Auth";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/Auth' element={<Auth />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
    </Routes>
  );
};

export default AllRoutes;
