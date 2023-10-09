import axios from "axios";
const API = axios.create({
  baseURL: "https://doubt-smasher.onrender.com/",
  headers:{
    Authorization: "Bearer " + JSON.parse(localStorage.getItem("Profile"))?.token
  }
});
export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);


// feed
export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value) =>
  API.patch(`/questions/vote/${id}`, {value});

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
  API.patch(`/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered});
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, {answerId, noOfAnswers});
  export const postInterest = (interests , lookingToConnect, location) =>
    API.post(`/interest`, {interests , lookingToConnect, location});

export const check = () => API.get("/");
