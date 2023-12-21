import { createSlice } from "@reduxjs/toolkit";

import { getHomePageRecipes } from "../api/recipeAPI";

const initialState = {
  results: {},
  loading: false,
  error: null,
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomePageRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHomePageRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.results[action.meta.arg.mealType] = action.payload;
      })
      .addCase(getHomePageRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default homePageSlice.reducer;
