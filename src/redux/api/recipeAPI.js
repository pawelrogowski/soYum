import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "./ApiClient";

export const getHomePageRecipes = createAsyncThunk(
  "homepage/fetch-recipes",
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/recipe/homepage`, { params: searchParams });
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);
