import * as api from "../api/api";

 const postInterest = (answerData) => async (dispatch) => {
  try {
    const {interests , lookingToConnect, location} = answerData;
    const {data} = await api.postInterest(
    interests , lookingToConnect, location
    );
    dispatch({type: "POST_INTEREST", payload: data});

  } catch (error) {
    console.log(error);
  }
};
export default postInterest;
