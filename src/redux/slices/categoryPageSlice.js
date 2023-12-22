import { createSlice } from "@reduxjs/toolkit";

import { getCategoryRecipes } from "../api/recipeAPI";

const initialState = {
  results: {},
  loading: false,
  error: null,
};

export const categoryPageSlice = createSlice({
  name: "categoryPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.results[action.payload.category] = action.payload.data;
      })
      .addCase(getCategoryRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categoryPageSlice.reducer;
