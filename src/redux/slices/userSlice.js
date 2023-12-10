import { createSlice } from "@reduxjs/toolkit";

import {
  changePassword,
  loginUser,
  logoutAllSessions,
  logoutUser,
  refreshToken,
  registerUser,
  updateAvatar,
  updateName,
} from "../api/userAPI";
import { toast } from "sonner";

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
  updateAvatar: {
    loading: false,
    message: null,
    error: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
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
        toast.success(action.payload.message);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.register.loading = false;
        state.register.message = null;
        state.register.error = action.payload.message;
        toast.error(action.payload.message);
      })
      .addCase(loginUser.pending, (state) => {
        state.login.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.loading = false;
        state.login.message = "Login successful";
        state.login.error = null;
        state.user = action.payload.user;
        toast.success(action.payload.message);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.loading = false;
        state.login.message = null;
        state.login.error = action.payload.message;
        toast.error(action.payload.message);
      })
      .addCase(logoutUser.pending, (state) => {
        state.logout.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.logout.loading = false;
        state.logout.message = "Logout successful";
        state.logout.error = null;
        state.user = {
          name: null,
          email: null,
          avatarUrl: null,
          isEmailConfirmed: null,
        };
        toast.success(action.payload.message);
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.logout.loading = false;
        state.logout.message = null;
        state.logout.error = action.payload.message;
        toast.error(action.payload.message);
      })
      .addCase(logoutAllSessions.pending, (state) => {
        state.logout.loading = true;
      })
      .addCase(logoutAllSessions.fulfilled, (state, action) => {
        state.logout.loading = false;
        state.logout.message = "Logout from all sessions successful";
        state.logout.error = null;
        state.user = {
          name: null,
          email: null,
          avatarUrl: null,
          isEmailConfirmed: null,
        };
        toast.success(action.payload.message);
      })
      .addCase(logoutAllSessions.rejected, (state, action) => {
        state.logout.loading = false;
        state.logout.message = null;
        state.logout.error = action.payload.message;
        toast.error(action.payload.message);
      })
      .addCase(refreshToken.pending, (state) => {
        state.refreshToken.loading = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.refreshToken.loading = false;
        state.refreshToken.message = "Token refresh successful";
        state.refreshToken.error = null;
        toast.success(action.payload.message);
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.refreshToken.loading = false;
        state.refreshToken.message = null;
        state.refreshToken.error = action.payload.message;
        toast.error(action.payload.message);
      })
      .addCase(changePassword.pending, (state) => {
        state.changePassword.loading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.changePassword.loading = false;
        state.changePassword.message = "Password change successful";
        state.changePassword.error = null;
        toast.success(action.payload.message);
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePassword.loading = false;
        state.changePassword.message = null;
        state.changePassword.error = action.payload.message;
        toast.error(action.payload.message);
      })
      .addCase(updateName.pending, (state) => {
        state.updateName.loading = true;
      })
      .addCase(updateName.fulfilled, (state, action) => {
        state.updateName.loading = false;
        state.updateName.message = "Name update successful";
        state.updateName.error = null;
        toast.success(action.payload.message);
      })
      .addCase(updateName.rejected, (state, action) => {
        state.updateName.loading = false;
        state.updateName.message = null;
        state.updateName.error = action.payload.message;
        toast.error(action.payload.message);
      })
      .addCase(updateAvatar.pending, (state) => {
        state.updateAvatar.loading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.updateAvatar.loading = false;
        state.updateAvatar.message = "Avatar updated successfully";
        state.updateAvatar.error = null;
        toast.success(action.payload.message);
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.updateAvatar.loading = false;
        state.updateAvatar.message = null;
        state.updateAvatar.error = action.payload.message;
        toast.error(action.payload.message);
      });
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
