import { Formik } from "formik";
import { useState } from "react";

import { RecipeImageUpload } from "../../RecipeImageUpload/RecipeImageUpload";
import { RecipeTextInput } from "../../RecipeTextInput/RecipeTextInput";
import { StyledFormikForm } from "./AddRecipeForm.styled";
export const AddRecipeForm = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  return (
    <Formik>
      <StyledFormikForm>
        <RecipeImageUpload onImageUpload={setUploadedImageUrl} />
        <div>
          <RecipeTextInput name="recipe title" placeholder="Enter item title" />
          <RecipeTextInput name="recipe about" placeholder="Enter about recipe" />
        </div>
      </StyledFormikForm>
    </Formik>
  );
};
