import * as Yup from "yup";

export const addRecipeSchema = Yup.object().shape({
  recipeTitle: Yup.string().required("Required").min(1, "Required").max(50, "Too Long"),
  recipeAbout: Yup.string()
    .required("*")
    .min(20, "Description too short")
    .max(120, "Description too long"),

  recipeCategories: Yup.array()
    .of(Yup.string())
    .required("Required")
    .min(1, "Category is required")
    .max(10, "Too many caregories"),

  recipeCookingTime: Yup.string()
    .required("Cooking time is required")
    .max(6, "Something went wrong"),
  recipeIngredients: Yup.array()
    .of(
      Yup.object().shape({
        ingredient: Yup.string().min(1, "Required").required("Required"),
        measureType: Yup.string().min(1, "Required").required("Required"),
        amount: Yup.string().required("Required"),
      })
    )
    .min(1, "Add at least one ingredient"),

  recipePreparationSteps: Yup.array().required().min(3, "At least 3 steps are required"),
  currentTextAreaValue: Yup.string().min(12, "Step too short").max(380, "Step too long"),
});
