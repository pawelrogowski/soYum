import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { categorySelectOptions } from "../../common/selectOptions";
import { useValidation } from "../../hooks/useFieldValidation";
import {
  setRecipeCategories,
  setRecipeCategoriesError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { StyledDiv } from "./CategorySelect.styled";

export const CategorySelect = () => {
  const { errors, validate } = useValidation();
  const { recipeCategories } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleChange = async (selectedOptions) => {
    const valueArray = selectedOptions.map((option) => option.value);
    const { isValid, errorMessage } = validate(addRecipeSchema, "recipeCategories", valueArray);
    isValid ? dispatch(setRecipeCategories(valueArray)) : dispatch(setRecipeCategories([]));
    errorMessage
      ? dispatch(setRecipeCategoriesError(errorMessage))
      : dispatch(setRecipeCategoriesError(null));
  };

  const handleBlur = async () => {
    const { errorMessage } = validate(addRecipeSchema, "recipeCategories", recipeCategories);
    errorMessage
      ? dispatch(setRecipeCategoriesError(errorMessage))
      : dispatch(setRecipeCategoriesError(null));
  };

  const handleWrapperClick = () => {
    ref.current.focus();
  };

  return (
    <StyledDiv onClick={handleWrapperClick} $hasError={errors.recipeCategories && "true"}>
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
      {errors.recipeCategories && (
        <span className="validation-error">{errors.recipeCategories}</span>
      )}
    </StyledDiv>
  );
};
