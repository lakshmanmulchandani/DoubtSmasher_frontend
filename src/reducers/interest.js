const interestReducer = (state = {data: null}, action) => {
  switch (action.type) {
    case "POST_INTEREST":
      return {...state};
      default:
        return state;
    }
  };
  export default interestReducer;
