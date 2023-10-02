import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: { isMobileMenuOpen: false, isUserEditMenuOpen: false },
  reducers: {
    toggleMobileMenu: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { toggleMobileMenu } = modalSlice.actions;
