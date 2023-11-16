import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    recipeImageUrl: "",
    recipeTitle: "",
    recipeAbout: "",
    recipeCategories: [],
    recipeCookingTime: "",
    recipeIngredients: [
      {
        id: "",
        ingredient: "",
        measureType: "",
        amount: "",
      },
    ],
    recipePreparationSteps: [],
    currentTextAreaValue: "",
    currentEditIndex: null,
  },
];

export const currentRecipeSlice = createSlice({
  name: "currentRecipe",
  initialState: { ...initialState },
  reducers: {},
});

export default currentRecipeSlice.reducer;
