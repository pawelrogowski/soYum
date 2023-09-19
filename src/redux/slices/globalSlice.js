import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: { isDarkTheme: false, isMobileMenuOpen: false },
  reducers: {
    toggleTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    },
    toggleMobileMenu: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { toggleTheme, toggleMobileMenu } = globalSlice.actions;
