import * as Yup from "yup";

export const addRecipeSchema = Yup.object().shape({
  recipeTitle: Yup.string().required("Required.").min(1, "Required").max(50, "Too Long"),
  recipeAbout: Yup.string().min(20, "Too short").required("Required."),
  recipeCategories: Yup.array().of(Yup.string()).min(1, "Required").required("Required"),
  recipeCookingTime: Yup.string().required("Required."),
  recipeIngredients: Yup.array()
    .of(
      Yup.object().shape({
        ingredient: Yup.string().min(1, "Required").required("Required"),
        measureType: Yup.string().min(1, "Required").required("Required"),
        amount: Yup.string().required("Required"),
      })
    )
    .min(1, "Add at least one ingredient"),

  recipePreparationSteps: Yup.array().min(1, "Add at least one step"),
  currentTextAreaValue: Yup.string().required("Steps cannot be empty"),
});
