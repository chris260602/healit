import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userName: "",
  userEmail: "",
  userBirth: "",
  userHeight: "",
  userWeight: "",
  currMeal: -1,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload.name;
      state.userEmail = action.payload.email;
      state.userBirth = action.payload.birth;
      state.userHeight = action.payload.height;
      state.userWeight = action.payload.weight;
      state.currMeal = action.payload.currMeal;
    },
    logoff: (state) => {
      window.location.href = "/login";
      state.isLoggedIn = false;
      state.userName = "";
      state.userEmail = "";
      state.userBirth = "";
      state.userHeight = "";
      state.userWeight = "";
      state.currMeal = -1;
    },
  },
});

export const { login, logoff } = userReducer.actions;

export default userReducer.reducer;
