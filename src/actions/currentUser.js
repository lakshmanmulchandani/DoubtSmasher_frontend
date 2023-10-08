export const setCurrentUser = (data) => {
  console.log("current user is set", data);
  return {
    type: "FETCH_CURRENT_USER",
    payload: data,
  };
};
