import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isMobileMenuOpen: false,
    isUserEditMenuOpen: false,
    isProfileUpdateMenuOpen: false,
    isLogoutModalOpen: false,
    isImageUploadModalLoading: false,
    isImageUploadModalOpen: false,
  },
  reducers: {
    setIsMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
    setIsUserEditMenuOpen: (state, action) => {
      state.isUserEditMenuOpen = action.payload;
    },
    setIsProfileUpdateMenuOpen: (state, action) => {
      state.isProfileUpdateMenuOpen = action.payload;
    },
    setIsLogoutModalOpen: (state, action) => {
      state.isLogoutModalOpen = action.payload;
    },
    setIsImageUploadModalLoading: (state, action) => {
      state.isImageUploadModalLoading = action.payload;
    },
    setIsImageUploadModalOpen: (state, action) => {
      state.isImageUploadModalOpen = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const {
  setIsMobileMenuOpen,
  setIsUserEditMenuOpen,
  setIsProfileUpdateMenuOpen,
  setIsLogoutModalOpen,
  setIsImageUploadModalOpen,
  setIsImageUploadModalLoading,
} = modalSlice.actions;
