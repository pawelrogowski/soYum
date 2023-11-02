import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
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

  const handleChange = (selectedOptions) => {
    const valueArray = selectedOptions.map((option) => option.value);
    const { isValid } = validate(addRecipeSchema, "recipeCategories", valueArray);
    isValid ? dispatch(setRecipeCategories(valueArray)) : dispatch(setRecipeCategories([]));
    recipeCategoriesError
      ? dispatch(setRecipeCategoriesError(recipeCategoriesError))
      : dispatch(setRecipeCategoriesError(null));
  };

  const handleBlur = () => {
    const { errorMessage } = validate(addRecipeSchema, "recipeCategories", recipeCategories);
    errorMessage
      ? dispatch(setRecipeCategoriesError(errorMessage))
      : dispatch(setRecipeCategoriesError(null));
  };

  const handleWrapperClick = () => {
    ref.current.focus();
  };

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
        placeholder="Categories*"
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
