import { useDispatch, useSelector } from "react-redux";

import { baseButtonMotion } from "../../../common/animations";
import { useValidation } from "../../../hooks/useValidation";
import { setFieldError } from "../../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../../validation/addRecipeSchema";
import { Button } from "../../Button/Button";
import { CategorySelect } from "../../CategorySelect/CategorySelect";
import { IngredientList } from "../../IngredientList/IngredientList";
import { RecipeImageUpload } from "../../RecipeImageUpload/RecipeImageUpload";
import { RecipePreparationStepsPreview } from "../../RecipePreparationStepsPreview/RecipePreparationStepsPreview";
import { RecipePreparationTextArea } from "../../RecipePreparationTextArea/RecipePreparationTextArea";
import { RecipeTextInput } from "../../RecipeTextInput/RecipeTextInput";
import { TimeSelect } from "../../TimeSelect/TimeSelect";
import { StyledForm } from "./AddRecipeForm.styled";

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const { validate } = useValidation();
  const data = useSelector((state) => state.addRecipeForm);

  const validateAndDispatch = (field, value) => {
    const { errorMessage } = validate(addRecipeSchema, field, value);
    dispatch(setFieldError({ field, error: errorMessage || null }));
  };

  const handleValidationOnBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      ["recipeTitle", "recipeAbout", "recipeCookingTime", "recipeCategories"].forEach((field) => {
        validateAndDispatch(field, data[field]);
      });
    }
  };

  const validateForm = () => {
    ["recipeTitle", "recipeAbout", "recipeCookingTime", "recipeCategories"].forEach((field) =>
      validateAndDispatch(field, data[field])
    );
    data.recipeIngredients.forEach((ingredient, index) => {
      ["ingredient", "measureType", "amount"].forEach((field) => {
        if (ingredient[field]?.error !== null) {
          const { errorMessage } = validate(
            addRecipeSchema,
            `recipeIngredients.[${index}].${field}`,
            ingredient[field]
          );
          dispatch(
            setFieldError({
              field: `recipeIngredients`,
              index: index,

              subfield: field,
              error: errorMessage || null,
            })
          );
        }
      });
    });

    data.recipePreparationSteps.length < 3 &&
      dispatch(
        setFieldError({
          field: "recipePreparationSteps",
          error: "At least 3 steps are required",
        })
      );
  };

  return (
    <StyledForm>
      <div className="image-upload-wrapper">
        <RecipeImageUpload />
        <div className="image-upload-wrapper__inner" onBlur={handleValidationOnBlur}>
          <RecipeTextInput name="recipeTitle" placeholder="Enter item title" />
          <RecipeTextInput name="recipeAbout" placeholder="Enter about recipe" />
          <TimeSelect />
          <CategorySelect />
        </div>
      </div>
      <IngredientList className="ingredient-list" />
      <RecipePreparationTextArea className="recipe-preparation-wrapper" />
      <RecipePreparationStepsPreview />
      <Button type="button" variant="outlineBig" onClick={validateForm} {...baseButtonMotion}>
        Add Recipe
      </Button>
    </StyledForm>
  );
};
