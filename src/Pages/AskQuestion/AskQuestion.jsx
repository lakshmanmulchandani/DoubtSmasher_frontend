import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import "./AskQuestion.css";
import {askQuestion} from "../../actions/question";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log({ questionTitle, questionBody, questionTags})
    dispatch(
      askQuestion(
        {
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
        },
        navigate
      )
    );
  };

  return (
    <div className='ask-question'>
      <div className='ask-ques-container'>
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className='ask-form-container'>
            <label htmlFor='ask-ques-title'>
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type='text'
                id='ask-ques-title'
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
                style={{
                  backgroundColor: " hsl(280, 9%,70%)", // Light purple background color for the textarea
                  color: "#fff", // Text color
                  border: "1px solid #ccc", // Border color
                  padding: "10px", // Padding for content inside the textarea
                  borderRadius: "10px",
                }}
              />
            </label>
            <label htmlFor='ask-ques-body'>
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>

              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Describe your doubt to your friends by writing here'
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                style={{
                  backgroundColor: " hsl(280, 9%,70%)", // Light purple background color for the textarea
                  color: "#fff", // Text color
                  border: "1px solid #ccc", // Border color
                  padding: "10px", // Padding for content inside the textarea
                  borderRadius: "10px",
                }}></textarea>
            </label>
            <label htmlFor='ask-ques-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type='text'
                id='ask-ques-tags'
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder='e.g. (xml typescript wordpress)'
                style={{
                  backgroundColor: " hsl(280, 9%,70%)", // Light purple background color for the textarea
                  color: "#fff", // Text color
                  border: "1px solid #ccc", // Border color
                  padding: "10px", // Padding for content inside the textarea
                  borderRadius: "10px",
                }}
              />
            </label>
          </div>
          <input
            type='submit'
            value='Reivew your question'
            className='review-btn'
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
