import { createSlice } from "@reduxjs/toolkit";

import {
  changePassword,
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
  updateName,
} from "../api/userAPI";

const initialState = {
  user: {
    name: null,
    email: null,
    avatarUrl: null,
    isEmailConfirmed: null,
  },
  register: {
    loading: false,
    message: null,
    error: null,
  },
  login: {
    loading: false,
    message: null,
    error: null,
  },
  logout: {
    loading: false,
    message: null,
    error: null,
  },
  refreshToken: {
    loading: false,
    message: null,
    error: null,
  },
  changePassword: {
    loading: false,
    message: null,
    error: null,
  },
  updateName: {
    loading: false,
    message: null,
    error: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.register.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.register.loading = false;
        state.register.message = "Registration successful";
        state.register.error = null;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.register.loading = false;
        state.register.message = null;
        state.register.error = action.payload.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.login.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.loading = false;
        state.login.message = "Login successful";
        state.login.error = null;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.loading = false;
        state.login.message = null;
        state.login.error = action.payload.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.logout.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.logout.loading = false;
        state.logout.message = "Logout successful";
        state.logout.error = null;
        state.user = {
          name: null,
          email: null,
          avatarUrl: null,
          isEmailConfirmed: null,
        };
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.logout.loading = false;
        state.logout.message = null;
        state.logout.error = action.payload.message;
      })
      .addCase(refreshToken.pending, (state) => {
        state.refreshToken.loading = true;
      })
      .addCase(refreshToken.fulfilled, (state) => {
        state.refreshToken.loading = false;
        state.refreshToken.message = "Token refresh successful";
        state.refreshToken.error = null;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.refreshToken.loading = false;
        state.refreshToken.message = null;
        state.refreshToken.error = action.payload.message;
      })
      .addCase(changePassword.pending, (state) => {
        state.changePassword.loading = true;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.changePassword.loading = false;
        state.changePassword.message = "Password change successful";
        state.changePassword.error = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePassword.loading = false;
        state.changePassword.message = null;
        state.changePassword.error = action.payload.message;
      })
      .addCase(updateName.pending, (state) => {
        state.updateName.loading = true;
      })
      .addCase(updateName.fulfilled, (state, action) => {
        state.updateName.loading = false;
        state.updateName.message = "Name update successful";
        state.updateName.error = null;
        state.user.name = action.payload.user.name;
      })
      .addCase(updateName.rejected, (state, action) => {
        state.updateName.loading = false;
        state.updateName.message = null;
        state.updateName.error = action.payload.message;
      });
  },
});

export default userSlice.reducer;
