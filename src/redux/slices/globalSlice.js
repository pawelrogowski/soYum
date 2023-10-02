import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: { isDarkTheme: false },
  reducers: {
    toggleTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { toggleTheme } = globalSlice.actions;
