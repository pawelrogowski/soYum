const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const accessTokenExpires = parseFloat(import.meta.env.VITE_ACCESS_TOKEN_EXPIRES);
const refreshTokenExpires = parseFloat(import.meta.env.VITE_REFRESH_TOKEN_EXPIRES);
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { api } from "./ApiClient";

export const loginUser = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await api.post(`${API_BASE_URL}/user/login`, userData);
    const { accessToken, refreshToken } = response.data.tokens;
    Cookies.set("accessToken", accessToken, {
      expires: accessTokenExpires,
      secure: true,
      sameSite: "Strict",
    });
    Cookies.set("refreshToken", refreshToken, {
      expires: refreshTokenExpires,
      secure: true,
      sameSite: "Strict",
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_BASE_URL}/user/register`, userData);
      const { accessToken, refreshToken } = response.data.tokens;
      Cookies.set("accessToken", accessToken, {
        expires: accessTokenExpires,
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("refreshToken", refreshToken, {
        expires: refreshTokenExpires,
        secure: true,
        sameSite: "Strict",
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const refreshToken = Cookies.get("refreshToken");
      const response = await api.post(`${API_BASE_URL}/user/refresh-token`, { refreshToken });
      const { accessToken } = response.data;
      Cookies.set("accessToken", accessToken, {
        expires: accessTokenExpires,
        secure: true,
        sameSite: "Strict",
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${API_BASE_URL}/user/logout`);
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (passwordData, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_BASE_URL}/user/change-password`, passwordData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateName = createAsyncThunk(
  "user/updateName",
  async (nameData, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_BASE_URL}/user/update-name`, nameData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
