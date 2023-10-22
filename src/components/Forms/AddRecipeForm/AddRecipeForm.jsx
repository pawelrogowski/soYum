import { Formik } from "formik";
import { useState } from "react";

import { Button } from "../../Button/Button";
import { CategorySelect } from "../../CategorySelect/CategorySelect";
import { IngredientList } from "../../IngredientList/IngredientList";
import { RecipeImageUpload } from "../../RecipeImageUpload/RecipeImageUpload";
import { RecipePreparation } from "../../RecipePreparation/RecipePreparation";
import { RecipeTextInput } from "../../RecipeTextInput/RecipeTextInput";
import { TimeSelect } from "../../TimeSelect/TimeSelect";
import { StyledFormikForm } from "./AddRecipeForm.styled";
export const AddRecipeForm = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  return (
    <Formik>
      <StyledFormikForm>
        <div className="image-upload-wrapper">
          <RecipeImageUpload onImageUpload={setUploadedImageUrl} />
          <div className="image-upload-wrapper__inner">
            <RecipeTextInput name="recipe title" placeholder="Enter item title" />
            <RecipeTextInput name="recipe about" placeholder="Enter about recipe" />
            <CategorySelect />
            <TimeSelect />
          </div>
        </div>
        <IngredientList className="ingredient-list" />
        <RecipePreparation className="recipe-preparation-wrapper" />
        <Button type="submit" variant="">
          Add
        </Button>
      </StyledFormikForm>
    </Formik>
  );
};
