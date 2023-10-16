import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isMobileMenuOpen: false,
    isUserEditMenuOpen: false,
    isProfileUpdateMenuOpen: false,
    isLogoutModalOpen: false,
  },
  reducers: {
    toggleIsMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
    toggleIsUserEditMenuOpen: (state, action) => {
      state.isUserEditMenuOpen = action.payload;
    },
    toggleIsProfileUpdateMenuOpen: (state, action) => {
      state.isProfileUpdateMenuOpen = action.payload;
    },
    toggleIsLogoutModalOpen: (state, action) => {
      state.isLogoutModalOpen = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const {
  toggleIsMobileMenuOpen,
  toggleIsUserEditMenuOpen,
  toggleIsProfileUpdateMenuOpen,
  toggleIsLogoutModalOpen,
} = modalSlice.actions;
