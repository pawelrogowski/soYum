import { Formik } from "formik";
import { useState } from "react";

import { CategorySelect } from "../../CategorySelect/CategorySelect";
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
          <CategorySelect />
        </div>
      </StyledFormikForm>
    </Formik>
  );
};
<figure>
  <h2>title</h2>
  <span>data</span>
  <button>show details</button>
  <figcation>
    <reszta>askjdkhaskdjhaskdjh</reszta>
  </figcation>
</figure>;
