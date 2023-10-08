import * as api from "../api/chatroom";

export const getChatRooms  = () => async (dispatch,getState) => {
  try {
    
    // Calling api and sendind authdata to make new user, profile with jwt is recieved in response
    console.log("chatrooms api")
    const data = (await api.getChatRooms()).data.chatrooms;
    console.log(data)
    // const check = await api.check();
    // calling reducer with profile containing token to set it up in local storage
    dispatch({type: "SET_CHATROOMS", data});
    // Getting profile from the local storage and setting it as current user also navigating to home page
  } catch (error) {
    console.log(error);
  }
};

export const getMessages = (chatroomid) => async(dispatch,getState) => {
    try{
        console.log("get messages")
        const data = (await api.getMessages(chatroomid))
        console.log(data)
    } catch (error) {
        console.log(error);
      }
}
