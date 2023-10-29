import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipeImageUrl: "",
  recipeImageUrlError: "",
  recipeTitle: "",
  recipeTitleError: "",
  recipeAbout: "",
  recipeAboutError: "",
  recipeCategories: [],
  recipeCategoriesError: "",
  recipeCookingTime: "",
  recipeCookingTimeError: "",
  recipeIngredients: [
    {
      ingredient: "",
      measureType: "",
      amount: "",
      ingredientError: "",
      measureTypeError: "",
      amountError: "",
    },
  ],
  recipePreparationSteps: [],
  recipePreparationStepsError: "",
  currentTextAreaValue: "",
  currentTextAreaValueError: "",
  currentEditIndex: null,
};
export const addRecipeFormSlice = createSlice({
  name: "addRecipeForm",
  initialState: { ...initialState },
  reducers: {
    setRecipeImageUrl: (state, action) => {
      state.recipeImageUrl = action.payload;
    },
    setRecipeImageUrlError: (state, action) => {
      state.recipeImageUrlError = action.payload;
    },

    setRecipeTitle: (state, action) => {
      state.recipeTitle = action.payload;
    },
    setRecipeTitleError: (state, action) => {
      state.recipeTitleError = action.payload;
    },

    setRecipeAbout: (state, action) => {
      state.recipeAbout = action.payload;
    },
    setRecipeAboutError: (state, action) => {
      state.recipeAboutError = action.payload;
    },

    setRecipeCategories: (state, action) => {
      state.recipeCategories = action.payload;
    },
    setRecipeCategoriesError: (state, action) => {
      state.recipeCategoriesError = action.payload;
    },

    setRecipeCookingTime: (state, action) => {
      state.recipeCookingTime = action.payload;
    },
    setRecipeCookingTimeError: (state, action) => {
      state.recipeCookingTimeError = action.payload;
    },

    addIngredient: (state, action) => {
      state.recipeIngredients.push(action.payload);
    },
    setIngredient: (state, action) => {
      const { index, ingredient } = action.payload;
      state.recipeIngredients[index].ingredient = ingredient;
    },
    setIngredientError: (state, action) => {
      const { index, error } = action.payload;
      state.recipeIngredients[index].ingredientError = error;
    },

    setMeasure: (state, action) => {
      const { index, measureType } = action.payload;
      state.recipeIngredients[index].measureType = measureType;
    },
    setMeasureError: (state, action) => {
      const { index, error } = action.payload;
      state.recipeIngredients[index].measureTypeError = error;
    },

    setAmount: (state, action) => {
      const { index, amount } = action.payload;
      state.recipeIngredients[index].amount = amount;
    },
    setAmountError: (state, action) => {
      const { index, error } = action.payload;
      state.recipeIngredients[index].amountError = error;
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
    addPreparationStepError: (state, action) => {
      state.recipePreparationStepsError.push(action.payload);
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
    setCurrentTextAreaValueError: (state, action) => {
      state.currentTextAreaValueError = action.payload;
    },

    setCurrentEditIndex: (state, action) => {
      state.currentEditIndex = action.payload;
    },
  },
});
export default addRecipeFormSlice.reducer;
export const {
  setRecipeImageUrl,
  setRecipeImageUrlError,
  setRecipeTitle,
  setRecipeTitleError,
  setRecipeAbout,
  setRecipeAboutError,
  setRecipeCategories,
  setRecipeCategoriesError,
  setRecipeCookingTime,
  setRecipeCookingTimeError,
  setRecipeIngredientNumber,
  setRecipeIngredientNumberError,
  addIngredient,
  addIngredientError,
  removeIngredient,
  addPreparationStep,
  addPreparationStepError,
  removePreparationStep,
  removeLastIngredient,
  setIngredient,
  setIngredientError,
  setMeasure,
  setMeasureError,
  setAmount,
  setAmountError,
  setCurrentTextAreaValue,
  setCurrentTextAreaValueError,
  setCurrentEditIndex,
  editPreparationStep,
} = addRecipeFormSlice.actions;
