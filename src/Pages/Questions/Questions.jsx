import React from "react";

import "../../App.css";

import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import {fetchAllQuestions} from "../../actions/question";
import {useDispatch} from "react-redux";

const Questions = () => {
  const dispatch = useDispatch();
  dispatch(fetchAllQuestions());
  return (
    <div className='home-container-1'>
      <div className='home-container-2'>
        <HomeMainbar />
      </div>
    </div>
  );
};

export default Questions;
