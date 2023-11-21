import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: { isDarkTheme: false, isLoading: false },
  reducers: {
    toggleTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { toggleTheme, setIsLoading } = globalSlice.actions;
