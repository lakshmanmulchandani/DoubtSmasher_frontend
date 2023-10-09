import * as api from "../api/api";
import {setCurrentUser} from "./currentUser";
import {fetchAllQuestions} from "./question";
export const signup = (authData, navigate) => async (dispatch, getState) => {
  try {
    console.log(getState());
    // Calling api and sendind authdata to make new user, profile with jwt is recieved in response
    const {data} = await api.signUp(authData);
    // const check = await api.check();
    // calling reducer with profile containing token to set it up in local storage
    dispatch({type: "AUTH", data});
    // Getting profile from the local storage and setting it as current user also navigating to home page
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(fetchAllQuestions());
    navigate && navigate()
  } catch (error) {
    console.log(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    // Calling api and sendind authdata to make new user, profile with jwt is recieved in response
    const {data} = await api.logIn(authData);
    // calling reducer with profile containing token to set it up in local storage
    dispatch({type: "AUTH", data});
    // Getting profile from the local storage and setting it as current user also navigating to home page
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(fetchAllQuestions());
    navigate("/Questions");
  } catch (error) {
    console.log(error);
  }
};
