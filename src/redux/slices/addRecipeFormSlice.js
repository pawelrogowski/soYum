import { createSlice, prepareAutoBatched } from "@reduxjs/toolkit";

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
    setRecipeImageUrl: {
      reducer(state, action) {
        state.recipeImageUrl = action.payload;
      },
      prepare: prepareAutoBatched(),
    },
    setRecipeImageUrlError: {
      reducer(state, action) {
        state.recipeImageUrlError = action.payload;
      },
      prepare: prepareAutoBatched(),
    },

    setRecipeTitle: {
      reducer(state, action) {
        state.recipeTitle = action.payload;
      },
      prepare: prepareAutoBatched(),
    },
    setRecipeTitleError: {
      reducer(state, action) {
        state.recipeTitleError = action.payload;
      },
      prepare: prepareAutoBatched(),
    },

    setRecipeAbout: {
      reducer(state, action) {
        state.recipeAbout = action.payload;
      },
      prepare: prepareAutoBatched(),
    },
    setRecipeAboutError: {
      reducer(state, action) {
        state.recipeAboutError = action.payload;
      },
      prepare: prepareAutoBatched(),
    },

    setRecipeCategories: {
      reducer(state, action) {
        state.recipeCategories = action.payload;
      },
      prepare: prepareAutoBatched(),
    },
    setRecipeCategoriesError: {
      reducer(state, action) {
        state.recipeCategoriesError = action.payload;
      },
      prepare: prepareAutoBatched(),
    },

    setRecipeCookingTime: {
      reducer(state, action) {
        state.recipeCookingTime = action.payload;
      },
      prepare: prepareAutoBatched(),
    },
    setRecipeCookingTimeError: {
      reducer(state, action) {
        state.recipeCookingTimeError = action.payload;
      },
      prepare: prepareAutoBatched(),
    },

    addIngredient: {
      reducer(state, action) {
        state.recipeIngredients.push(action.payload);
      },
      prepare: prepareAutoBatched(),
    },
    setIngredient: {
      reducer(state, action) {
        const { index, ingredient } = action.payload;
        state.recipeIngredients[index].ingredient = ingredient;
      },
      prepare: prepareAutoBatched(),
    },
    setIngredientError: {
      reducer(state, action) {
        const { index, error } = action.payload;
        state.recipeIngredients[index].ingredientError = error;
      },
      prepare: prepareAutoBatched(),
    },

    setMeasure: {
      reducer(state, action) {
        const { index, measureType } = action.payload;
        state.recipeIngredients[index].measureType = measureType;
      },
      prepare: prepareAutoBatched(),
    },
    setMeasureError: {
      reducer(state, action) {
        const { index, error } = action.payload;
        state.recipeIngredients[index].measureTypeError = error;
      },
      prepare: prepareAutoBatched(),
    },

    setAmount: {
      reducer(state, action) {
        const { index, amount } = action.payload;
        state.recipeIngredients[index].amount = amount;
      },
      prepare: prepareAutoBatched(),
    },
    setAmountError: {
      reducer(state, action) {
        const { index, error } = action.payload;
        state.recipeIngredients[index].amountError = error;
      },
      prepare: prepareAutoBatched(),
    },

    removeIngredient: {
      reducer(state, action) {
        state.recipeIngredients = state.recipeIngredients.filter(
          (_, index) => index !== action.payload
        );
      },
      prepare: prepareAutoBatched(),
    },
    removeLastIngredient: (state) => {
      state.recipeIngredients.pop();
    },

    addPreparationStep: {
      reducer(state, action) {
        state.recipePreparationSteps.push(action.payload);
      },
      prepare: prepareAutoBatched(),
    },
    setPreparationStepError: {
      reducer(state, action) {
        state.recipePreparationStepsError = action.payload;
      },
      prepare: prepareAutoBatched(),
    },

    editPreparationStep: {
      reducer(state, action) {
        const { index, text } = action.payload;
        state.recipePreparationSteps[index] = text;
      },
      prepare: prepareAutoBatched(),
    },
    removePreparationStep: {
      reducer(state, action) {
        state.recipePreparationSteps = state.recipePreparationSteps.filter(
          (_, index) => index !== action.payload
        );
      },
      prepare: prepareAutoBatched(),
    },

    setCurrentTextAreaValue: {
      reducer(state, action) {
        state.currentTextAreaValue = action.payload;
      },
      prepare: prepareAutoBatched(),
    },
    setCurrentTextAreaValueError: {
      reducer(state, action) {
        state.currentTextAreaValueError = action.payload;
      },
      prepare: prepareAutoBatched(),
    },

    setCurrentEditIndex: {
      reducer(state, action) {
        state.currentEditIndex = action.payload;
      },
      prepare: prepareAutoBatched(),
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
  setPreparationStepError,
} = addRecipeFormSlice.actions;
