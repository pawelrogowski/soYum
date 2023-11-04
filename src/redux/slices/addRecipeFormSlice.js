import { createSlice, prepareAutoBatched } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

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
      id: "0",
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
    setField: {
      reducer(state, action) {
        const { field, subfield, value, index } = action.payload;
        if (subfield !== undefined && index !== undefined) {
          state[field][index][subfield] = value;
        } else if (index !== undefined) {
          state[field][index] = value;
        } else {
          state[field] = value;
        }
      },
      prepare: prepareAutoBatched(),
    },

    setFieldError: {
      reducer(state, action) {
        const { field, subfield, error, index } = action.payload;
        if (subfield !== undefined && index !== undefined) {
          state[field][index][subfield + "Error"] = error;
        } else if (index !== undefined) {
          state[field][index] = error;
        } else {
          state[field + "Error"] = error;
        }
      },
      prepare: prepareAutoBatched(),
    },

    addIngredient: {
      reducer(state) {
        const newIngredient = {
          id: uniqueId(),
          ingredient: "",
          measureType: "",
          amount: "",
          ingredientError: "",
          measureTypeError: "",
          amountError: "",
        };

        state.recipeIngredients.push(newIngredient);
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
        const newStep = {
          id: uniqueId(),
          text: action.payload,
        };
        state.recipePreparationSteps.push(newStep);
      },
      prepare: prepareAutoBatched(),
    },

    editPreparationStep: {
      reducer(state, action) {
        const { id, text } = action.payload;
        const step = state.recipePreparationSteps.find((step) => step.id === id);
        if (step) {
          step.text = text;
        }
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
  },
});
export default addRecipeFormSlice.reducer;
export const {
  setField,
  setFieldError,
  addIngredient,
  removeIngredient,
  removeLastIngredient,
  addPreparationStep,
  editPreparationStep,
  removePreparationStep,
} = addRecipeFormSlice.actions;
