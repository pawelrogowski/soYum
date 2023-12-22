import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "./ApiClient";

export const getHomePageRecipes = createAsyncThunk(
  "homePage/fetch-recipes",
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await api.get(`/recipe/homepage`, { params: searchParams });
      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const getCategoryRecipes = createAsyncThunk(
  "categoryPage/fetch-recipes",
  async (category, { rejectWithValue }) => {
    try {
      const response = await api.get(`/recipe/search`, { params: { keyword: category } });
      return { category, data: response.data };
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue(err.message);
    }
  }
);
