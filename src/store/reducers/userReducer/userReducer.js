import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  // isLoggedIn: true,
  userID: "",
  userName: "",
  userEmail: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userID = action.payload._id;
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    logoff: (state) => {
      window.location.href = "/login";
      state.isLoggedIn = false;
      state.userID = "";
      state.userName = "";
      state.userEmail = "";
    },
  },
});

export const { login, logoff } = userReducer.actions;

export default userReducer.reducer;
