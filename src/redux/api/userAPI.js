const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../../utils/cookieUtils";
import { api } from "./ApiClient";

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/user/register`, userData);
      const { accessToken, refreshToken } = response.data.tokens;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await api.post(`/user/login`, userData);
    const { accessToken, refreshToken } = response.data.tokens;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return rejectWithValue(err.response.data);
    }
    return rejectWithValue(err.message);
  }
});

export const logoutUser = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`/user/logout`);
    removeAccessToken();
    removeRefreshToken();
    return response.data;
  } catch (err) {
    if (err.response && err.response.data) {
      return rejectWithValue(err.response.data);
    }
    return rejectWithValue(err.message);
  }
});

export const logoutAllSessions = createAsyncThunk(
  "user/logoutAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/user/logout-all`);
      removeAccessToken();
      removeRefreshToken();
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Inside refreshToken action");
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        throw new Error("Refresh token not found");
      }
      const response = await api.post(`/user/refresh-token`, { refreshToken });
      const { accessToken } = response.data;
      setAccessToken(accessToken);
      return response.data;
    } catch (err) {
      console.log("Error in refreshToken action:", err);
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (passwordData, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_BASE_URL}/user/change-password`, passwordData);
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const updateName = createAsyncThunk(
  "user/updateName",
  async (nameData, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_BASE_URL}/user/update-name`, nameData);
      console.log(response.data);
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async (avatarData, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_BASE_URL}/user/update-avatar`, avatarData);
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);
