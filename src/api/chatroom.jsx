import axios from "axios";

const API = axios.create({
  baseURL: "https://doubt-smasher.onrender.com/",
  headers:{
    Authorization: "Bearer " + JSON.parse(localStorage.getItem("Profile"))?.token
  }
});



export const getChatRooms = () => API.get("/chatroom/getchatrooms");
export const getMessages = (chatroomid) => API.get("/message/getpreviousmessages/" + chatroomid);
export const getTopics = (query) => API.post("/topic/gettopics",{query:query});
export const createRoom = (data) => API.post("/chatroom/createchatroom",data);
export const getRecommendations = () => API.get("/chatroom/getrecommendations");
export const joinRoom = (chatroomid) => API.post("/chatroom/joinchatroom",{
    chatroomid:chatroomid
});