import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "./ApiClient";

export const searchRecipes = createAsyncThunk(
  "recipes/search",
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await api.get(`/recipe/search`, { params: searchParams });
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);
