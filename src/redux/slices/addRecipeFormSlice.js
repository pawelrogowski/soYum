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
  recipePreparationSteps: [],
  currentTextAreaValue: "",
  currentEditIndex: null,
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
    setIngredient: (state, action) => {
      const { index, ingredient } = action.payload;
      state.recipeIngredients[index].ingredient = ingredient;
    },
    setMeasure: (state, action) => {
      const { index, measureType } = action.payload;
      state.recipeIngredients[index].measureType = measureType;
    },
    setAmount: (state, action) => {
      const { index, amount } = action.payload;
      state.recipeIngredients[index].amount = amount;
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
    editPreparationStep: (state, action) => {
      const { index, text } = action.payload;
      state.recipePreparationSteps[index] = text;
    },
    removePreparationStep: (state, action) => {
      state.recipePreparationSteps = state.recipePreparationSteps.filter(
        (_, index) => index !== action.payload
      );
    },
    setCurrentTextAreaValue: (state, action) => {
      state.currentTextAreaValue = action.payload;
    },
    setCurrentEditIndex: (state, action) => {
      state.currentEditIndex = action.payload;
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
  setIngredient,
  setMeasure,
  setAmount,
  setCurrentTextAreaValue,
  setCurrentEditIndex,
  editPreparationStep,
} = addRecipeFormSlice.actions;
