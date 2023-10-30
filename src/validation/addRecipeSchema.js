import * as Yup from "yup";

export const addRecipeSchema = Yup.object().shape({
  recipeTitle: Yup.string("wrong type")
    .required("Required.")
    .min(1, "Required")
    .max(50, "Too Long"),
  recipeAbout: Yup.string("wrong type").required("Required.").min(20, "Too short"),
  recipeCategories: Yup.array().of(Yup.string("wrong type")).min(1, "Required"),
  recipeCookingTime: Yup.string("wrong type").required("Required"),
  recipeIngredients: Yup.array()
    .of(
      Yup.object().shape({
        ingredient: Yup.string("wrong type").required("Required").min(1, "Required"),
        measureType: Yup.string("wrong type").required("Required").min(1, "Required"),
        amount: Yup.string("wrong type").required("Required"),
      })
    )
    .min(1, "Add at least one ingredient"),

  recipePreparationSteps: Yup.array().min(1, "Add at least one step"),
});
