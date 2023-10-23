import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipeImageUrl: "",
  recipeTitle: "",
  recipeAbout: "",
  recipeCategories: [],
  recipeCookingTime: "",
  recipeIngredients: [
    {
      ingredient: "",
      measureType: "",
      amount: 0,
    },
  ],
  recipePreparationSteps: [
    {
      stepNumber: 1,
      stepDescription: "",
    },
  ],
};
export const addRecipeFormSlice = createSlice({
  name: "addRecipeForm",
  initialState: { ...initialState },
  reducers: {
    setRecipeImageUrl: (state, action) => {
      state.recipeImageUrl = action.payload;
    },
    setRecipeTitle: (state, action) => {
      state.recipeTitle = action.payload;
    },
    setRecipeAbout: (state, action) => {
      state.recipeAbout = action.payload;
    },
    setRecipeCategories: (state, action) => {
      state.recipeCategories = action.payload;
    },
    setRecipeCookingTime: (state, action) => {
      state.recipeCookingTime = action.payload;
    },
    addIngredient: (state, action) => {
      state.recipeIngredients.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.recipeIngredients = state.recipeIngredients.filter(
        (_, index) => index !== action.payload
      );
    },
    removeLastIngredient: (state) => {
      state.recipeIngredients.pop();
    },
    addPreparationStep: (state, action) => {
      state.recipePreparationSteps.push(action.payload);
    },
    removePreparationStep: (state, action) => {
      state.recipePreparationSteps = state.recipePreparationSteps.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});
export default addRecipeFormSlice.reducer;
export const {
  setRecipeImageUrl,
  setRecipeTitle,
  setRecipeAbout,
  setRecipeCategories,
  setRecipeCookingTime,
  setRecipeIngredientNumber,
  addIngredient,
  removeIngredient,
  addPreparationStep,
  removePreparationStep,
  removeLastIngredient,
} = addRecipeFormSlice.actions;
