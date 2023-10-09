import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

const Questions = ({question}) => {
  return (
    <div className='Doubt-Container'>
      <div className='Doubt-content'>
        <div className='Doubt-Question'>
          <i
            className='fas fa-question-circle'
            style={{"padding-right": "5px"}}></i>
          <Link
            to={`/Questions/${question._id}`}
            className='question-title-link'>
            {question.questionTitle}
          </Link>
        </div>
        <div className='Doubt-tags'>
          {question.questionTags.map((tag) => (
            <p key={tag}> #{tag}</p>
          ))}
        </div>
      </div>
      <div className='Doubt-divider'></div>
      <div className='Doubt-extra-info'>
        <div className='Doubt-vote'>
          <p>
            {" "}
            <i
              className='fas fa-thumbs-up'
              style={{"padding-right": "5px"}}></i>{" "}
            {question.upVote.length - question.downVote.length}
          </p>
        </div>
        <div className='Doubt-answers'>
          <p>
            <i className='fas fa-comment'></i> {question.noOfAnswers}
          </p>
        </div>
        <div className='Doubt-user'>
          <p className='display-time'>
            {" "}
            asked {moment(question.askedOn).fromNow()} by {question.userPosted}{" "}
            <i className='fas fa-user-circle'></i>
          </p>
        </div>
      </div>
    </div>
  );
  //   return (
  //     <div className='display-question-container'>
  //       <div className='display-question-details'>
  //         <Link to={`/Questions/${question._id}`} className='question-title-link'>
  //           {question.questionTitle}
  //         </Link>
  //         <div className='display-tags-time'>
  //           <p className='display-time'>
  //             asked {moment(question.askedOn).fromNow()} {question.userPosted}
  //           </p>
  //         </div>
  //       </div>

  //       <div>
  //         <div className='display-tags'>
  //           {question.questionTags.map((tag) => (
  //             <p key={tag}>{tag}</p>
  //           ))}
  //         </div>
  //         <div className='display-votes-ans'>
  //           <p>{question.upVote.length - question.downVote.length}</p>
  //           <p>votes</p>
  //         </div>
  //         <div className='display-votes-ans'>
  //           <p>{question.noOfAnswers}</p>
  //           <p>answers</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default Questions;
