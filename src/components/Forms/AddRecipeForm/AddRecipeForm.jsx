import { Formik } from "formik";
import { useState } from "react";

import { CategorySelect } from "../../CategorySelect/CategorySelect";
import { IngredientList } from "../../IngredientList/IngredientList";
import { RecipeImageUpload } from "../../RecipeImageUpload/RecipeImageUpload";
import { RecipeTextInput } from "../../RecipeTextInput/RecipeTextInput";
import { TimeSelect } from "../../TimeSelect/TimeSelect";
import { StyledFormikForm } from "./AddRecipeForm.styled";
export const AddRecipeForm = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  return (
    <Formik>
      <StyledFormikForm>
        <div>
          <RecipeImageUpload onImageUpload={setUploadedImageUrl} />
          <div>
            <RecipeTextInput name="recipe title" placeholder="Enter item title" />
            <RecipeTextInput name="recipe about" placeholder="Enter about recipe" />
            <CategorySelect />
            <TimeSelect />
          </div>
        </div>
        <IngredientList />
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
