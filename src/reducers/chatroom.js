const initialState = {
    chatrooms:[]
}

const chatroomReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CHATROOMS":
        return {...state, chatrooms: action?.data};

      default:
        return state;
    }
  };
  
  export default chatroomReducer;
  
  export const selectChatRooms = (state) => state.chatrooms.chatrooms