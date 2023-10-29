import { Formik } from "formik";

import { Button } from "../../Button/Button";
import { CategorySelect } from "../../CategorySelect/CategorySelect";
import { IngredientList } from "../../IngredientList/IngredientList";
import { RecipeImageUpload } from "../../RecipeImageUpload/RecipeImageUpload";
// import { RecipePreparationStepsPreview } from "../../RecipePreparationStepsPreview/RecipePreparationStepsPreview";
// import { RecipePreparationTextArea } from "../../RecipePreparationTextArea/RecipePreparationTextArea";
import { RecipeTextInput } from "../../RecipeTextInput/RecipeTextInput";
import { TimeSelect } from "../../TimeSelect/TimeSelect";
import { StyledFormikForm } from "./AddRecipeForm.styled";

const initialValues = {
  recipeTitle: "",
  recipeAbout: "",
  recipeCategories: [],
  recipeCookingTime: "",
  recipeIngredients: [
    {
      ingredient: "",
      measureType: "",
      amount: 0,
    },
  ],
  recipePreparationSteps: [],
};
export const AddRecipeForm = () => {
  return (
    <Formik initialValues={initialValues}>
      <StyledFormikForm>
        <div className="image-upload-wrapper">
          <RecipeImageUpload />
          <div className="image-upload-wrapper__inner">
            <RecipeTextInput name="recipeTitle" placeholder="Enter item title*" />
            <RecipeTextInput name="recipeAbout" placeholder="Enter about recipe*" />
            <TimeSelect /> <CategorySelect />
          </div>
        </div>
        <IngredientList className="ingredient-list" />
        {/* <RecipePreparationTextArea className="recipe-preparation-wrapper" />
        <RecipePreparationStepsPreview /> */}
        <Button type="submit" variant="outlineBig" disabled>
          Add Recipe
        </Button>
      </StyledFormikForm>
    </Formik>
  );
};
