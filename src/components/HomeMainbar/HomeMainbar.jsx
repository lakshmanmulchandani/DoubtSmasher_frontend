import React from "react";
import { useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const user = 1;
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        <div className='Doubts-header'>
          <h1>Recent Doubts</h1>
        </div>
      </div>
      <div className='doubt-count'>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>

      <button onClick={checkAuth} className='fixed-button'>
        <i class='fas fa-comment'></i> Ask Question
      </button>
    </div>
  );
};

export default HomeMainbar;
