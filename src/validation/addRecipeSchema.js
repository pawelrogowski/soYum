import { array, object, string } from "yup";

export const addRecipeSchema = object().shape({
  recipeTitle: string().required("Required").min(1, "Required").max(50, "Too Long"),
  recipeAbout: string()
    .required("Required")
    .min(20, "Description too short")
    .max(120, "Description too long"),

  recipeCategories: array()
    .of(string())
    .required("Required")
    .min(1, "Category is required")
    .max(10, "Too many caregories"),

  recipeCookingTime: string().required("Cooking time is required").max(6, "Something went wrong"),
  recipeIngredients: array()
    .of(
      object().shape({
        ingredient: string().min(1, "Required").required("Required"),
        measureType: string().min(1, "Required").required("Required"),
        amount: string().required("Required"),
      })
    )
    .min(1, "Add at least one ingredient"),

  recipePreparationSteps: array().required().min(3, "At least 3 steps are required"),
  currentTextAreaValue: string().min(12, "Step too short").max(380, "Step too long"),
});
