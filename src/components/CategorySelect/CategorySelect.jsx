import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { inputErrorMotion } from "../../common/animations.js";
import { categorySelectOptions } from "../../common/selectOptions";
import { useValidation } from "../../hooks/useValidation";
import {
  setRecipeCategories,
  setRecipeCategoriesError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { InputErrorSpan } from "../InputErrorSpan/InputErrorSpan.jsx";
import { StyledDiv } from "./CategorySelect.styled";

export const CategorySelect = () => {
  const { validate } = useValidation();
  const { recipeCategories, recipeCategoriesError } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleChange = useCallback(
    (selectedOptions) => {
      const valueArray = selectedOptions.map((option) => option.value);
      const { isValid, errorMessage } = validate(addRecipeSchema, "recipeCategories", valueArray);

      if (isValid) {
        dispatch(setRecipeCategories(valueArray));
      }

      if (errorMessage) {
        dispatch(setRecipeCategoriesError(errorMessage));
        dispatch(setRecipeCategories([]));
      }

      if (valueArray.length === 0) {
        dispatch(setRecipeCategories([]));
        dispatch(setRecipeCategoriesError("At least 1 category is required"));
      }
    },
    [validate, dispatch]
  );

  const handleBlur = useCallback(() => {
    const { errorMessage } = validate(addRecipeSchema, "recipeCategories", recipeCategories);

    if (errorMessage) {
      dispatch(setRecipeCategoriesError(errorMessage));
      dispatch(setRecipeCategories([]));
    } else {
      dispatch(setRecipeCategoriesError(null));
    }
  }, [validate, dispatch, recipeCategories]);

  const handleWrapperClick = useCallback(() => {
    ref.current.focus();
  }, []);

  return (
    <StyledDiv onClick={handleWrapperClick} $hasError={recipeCategoriesError && "true"}>
      <Select
        ref={ref}
        openMenuOnFocus
        openMenuOnClick
        isMulti
        unstyled
        options={categorySelectOptions}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Categories"
        classNamePrefix="Select"
      />
      <AnimatePresence>
        {recipeCategoriesError && (
          <InputErrorSpan
            className="validation-error"
            errorMessage={recipeCategoriesError}
            {...inputErrorMotion}
          />
        )}
      </AnimatePresence>
    </StyledDiv>
  );
};
