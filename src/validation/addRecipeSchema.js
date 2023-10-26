import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  recipeTitle: Yup.string().required("Title is required."),
  recipeAbout: Yup.string()
    .required("Short description is required.")
    .min(20, "please provide longer description."),
  recipeCategories: Yup.array().of(Yup.string()).min(1, "Select at least one category"),
  recipeCookingTime: Yup.string().required("Required"),

  recipeIngredients: Yup.array()
    .of(
      Yup.object().shape({
        ingredient: Yup.string("must be a string").required("required").min(5, "min 5"), // to mnie interesuje
        measureType: Yup.string().required("Required"),
        amount: Yup.number().required("Required"),
      })
    )
    .min(1, "Add at least one ingredient"),

  recipePreparationSteps: Yup.array().min(1, "Add at least one step"),
});
