import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post("https://so-yummy.cyclic.app/api/user/login", userData);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://so-yummy.cyclic.app/api/user/register", userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
