import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isMobileMenuOpen: false,
    isUserEditMenuOpen: false,
    isProfileUpdateMenuOpen: false,
  },
  reducers: {
    toggleMobileMenu: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
    toggleUserEditMenu: (state, action) => {
      state.isUserEditMenuOpen = action.payload;
    },
    toggleProfileUpdateMenu: (state, action) => {
      state.isProfileUpdateMenuOpen = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { toggleMobileMenu, toggleUserEditMenu, toggleProfileUpdateMenu } =
  modalSlice.actions;
