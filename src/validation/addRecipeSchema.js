import * as Yup from "yup";

export const addRecipeSchema = Yup.object().shape({
  recipeTitle: Yup.string().required("Required").min(1, "Required").max(50, "Too Long"),
  recipeAbout: Yup.string()
    .min(20, "Description too short")
    .required("Short description is required"),
  recipeCategories: Yup.array()
    .of(Yup.string())
    .min(1, "At least 1 category is required")
    .required("Required"),
  recipeCookingTime: Yup.string().required("Cooking time is required"),
  recipeIngredients: Yup.array()
    .of(
      Yup.object().shape({
        ingredient: Yup.string().min(1, "Required").required("Required"),
        measureType: Yup.string().min(1, "Required").required("Required"),
        amount: Yup.string().required("Required"),
      })
    )
    .min(1, "Add at least one ingredient"),

  recipePreparationSteps: Yup.array().min(3, "At least 3 steps are required"),
  currentTextAreaValue: Yup.string().required("At least 3 steps are required"),
});
