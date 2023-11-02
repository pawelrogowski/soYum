import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useValidation } from "../../../hooks/useValidation";
import {
  setAmountError,
  setCurrentTextAreaValueError,
  setIngredientError,
  setMeasureError,
  setRecipeAboutError,
  setRecipeCategoriesError,
  setRecipeCookingTimeError,
  setRecipeTitleError,
} from "../../../redux/slices/addRecipeFormSlice";
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
  const {
    recipeTitle,
    recipeAbout,
    recipeCategories,
    recipeCookingTime,
    currentTextAreaValue,
    recipeIngredients,
  } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();
  const { validate } = useValidation();

  const handleValidationOnBlur = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    const { errorMessage: titleError } = validate(addRecipeSchema, "recipeTitle", recipeTitle);
    const { errorMessage: aboutError } = validate(addRecipeSchema, "recipeAbout", recipeAbout);
    const { errorMessage: cookingTimeError } = validate(
      addRecipeSchema,
      "recipeCookingTime",
      recipeCookingTime
    );
    const { errorMessage: categoriesError } = validate(
      addRecipeSchema,
      "recipeCategories",
      recipeCategories
    );

    titleError ? dispatch(setRecipeTitleError(titleError)) : dispatch(setRecipeTitleError(null));
    aboutError ? dispatch(setRecipeAboutError(aboutError)) : dispatch(setRecipeAboutError(null));
    cookingTimeError
      ? dispatch(setRecipeCookingTimeError(cookingTimeError))
      : dispatch(setRecipeCookingTimeError(null));
    categoriesError
      ? dispatch(setRecipeCategoriesError(categoriesError))
      : dispatch(setRecipeCategoriesError(null));
  };

  const { fields, errorActions } = useMemo(() => {
    return {
      fields: ["ingredient", "measureType", "amount"],
      errorActions: {
        ingredient: setIngredientError,
        measureType: setMeasureError,
        amount: setAmountError,
      },
    };
  }, []);

  const validateForm = () => {
    const { errorMessage: titleError } = validate(addRecipeSchema, "recipeTitle", recipeTitle);
    const { errorMessage: aboutError } = validate(addRecipeSchema, "recipeAbout", recipeAbout);
    const { errorMessage: cookingTimeError } = validate(
      addRecipeSchema,
      "recipeCookingTime",
      recipeCookingTime
    );
    const { errorMessage: categoriesError } = validate(
      addRecipeSchema,
      "recipeCategories",
      recipeCategories
    );
    const { errorMessage: textAreaError } = validate(
      addRecipeSchema,
      "currentTextAreaValue",
      currentTextAreaValue
    );

    titleError ? dispatch(setRecipeTitleError(titleError)) : dispatch(setRecipeTitleError(null));
    aboutError ? dispatch(setRecipeAboutError(aboutError)) : dispatch(setRecipeAboutError(null));

    cookingTimeError
      ? dispatch(setRecipeCookingTimeError(cookingTimeError))
      : dispatch(setRecipeCookingTimeError(null));
    categoriesError
      ? dispatch(setRecipeCategoriesError(categoriesError))
      : dispatch(setRecipeCategoriesError(null));
    textAreaError
      ? dispatch(setCurrentTextAreaValueError(textAreaError))
      : dispatch(setRecipeCategoriesError(null));

    const len = recipeIngredients.length;
    if (len === 1) {
      const recipeIngredient = recipeIngredients[0];
      for (const field of fields) {
        if (recipeIngredient[field] !== undefined && recipeIngredient[field].error !== null) {
          const { errorMessage: fieldError } = validate(
            addRecipeSchema,
            `recipeIngredients.${field}`,
            recipeIngredient[field]
          );
          dispatch(
            errorActions[field]({
              index: 0,
              error: fieldError || null,
            })
          );
        }
      }
    } else {
      for (let index = 0; index < len; index++) {
        const recipeIngredient = recipeIngredients[index];
        for (const field of fields) {
          if (recipeIngredient[field] !== undefined && recipeIngredient[field].error !== null) {
            const { errorMessage: fieldError } = validate(
              addRecipeSchema,
              `recipeIngredients.[${index}].${field}`,
              recipeIngredient[field]
            );
            dispatch(
              errorActions[field]({
                index: index,
                error: fieldError || null,
              })
            );
          }
        }
      }
    }
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
      <Button type="button" variant="outlineBig" onClick={validateForm}>
        Add Recipe
      </Button>
    </StyledForm>
  );
};
