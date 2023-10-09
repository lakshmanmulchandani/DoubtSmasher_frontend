import React, {useState} from "react";
import {useParams, Link, useNavigate, useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";

import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import {postAnswer, deleteQuestion, voteQuestion} from "../../actions/question";
import {fetchAllQuestions} from "../../actions/question";
const QuestionsDetails = () => {
  const {id} = useParams();
  var questionsList = useSelector((state) => state.questionsReducer);
  questionsList = questionsList.data;

  const [Answer, setAnswer] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const location = useLocation();
  const url = "http://localhost:3000";

  dispatch(fetchAllQuestions());

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
          })
        );
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, "upVote"));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVote"));
  };

  return (
    <div className='question-details-page'>
      {/* console.log(questionsList) */}
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className='question-details-container'>
                  <div className='question-title'>
                    {question.questionTitle}{" "}
                  </div>
                  <div className='question-details-container-2'>
                    <div className='question-votes'>
                      <img
                        src={upvote}
                        alt=''
                        width='18'
                        className='votes-icon'
                        onClick={handleUpVote}
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={downvote}
                        alt=''
                        width='18'
                        className='votes-icon'
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{width: "100%"}}>
                      <p className='question-body'>{question.questionBody}</p>
                      <div className='question-details-tags'>
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className='question-actions-user'>
                        <div>
                          <button type='button' onClick={handleShare}>
                            Share
                          </button>
                          {User?.result?._id === question?.userId && (
                            <button type='button' onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className='user-link'
                            style={{color: "#0086d8"}}>
                            <Avatar
                              backgroundColor='orange'
                              px='8px'
                              py='5px'
                              borderRadius='4px'>
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section className='submitted-ans'>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className='post-ans-container'>
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}>
                    <textarea
                      name=''
                      id=''
                      cols='30'
                      rows='10'
                      placeholder='Help your friend by writing here'
                      onChange={(e) => setAnswer(e.target.value)}
                      style={{
                        backgroundColor: " hsl(280, 9%,70%)", // Light purple background color for the textarea
                        color: "#fff", // Text color
                        border: "1px solid #ccc", // Border color
                        padding: "10px", // Padding for content inside the textarea
                        borderRadius: "10px",
                      }}></textarea>
                    <br />
                    <input
                      type='Submit'
                      className='post-ans-btn'
                      value='Post Your Answer'
                      style={{
                        backgroundColor: "#f2e8fd", // Light purple background color for the input
                        color: "#333", // Text color
                        border: "1px solid #ccc", // Border color
                        padding: "10px", // Padding for content inside the input
                      }}
                    />
                  </form>

                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to='/Tags' key={tag} className='ans-tags'>
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to='/AskQuestion'
                      style={{textDecoration: "none", color: "#009dff"}}>
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
