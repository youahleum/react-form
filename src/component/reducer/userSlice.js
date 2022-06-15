import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    id: "",
    isLogin: null,
  },
  reducers: {
    loginUser: (state, action) => {
      return { ...action.payload, isLogin: true };
    },

    clearUser: (state) => {
      return {
        name: "",
        id: "",
        isLogin: false,
      };
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
