import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: { isDarkTheme: false, signInRedirectPath: "/home" },
  reducers: {
    toggleTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    },
    setSignInRedirectPatch: (state, action) => {
      state.signInRedirectPath = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { toggleTheme, setSignInRedirectPatch } = globalSlice.actions;
