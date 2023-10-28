import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { useValidation } from "../../hooks/useFieldValidation";
import {
  setRecipeCategories,
  setRecipeCategoriesError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { StyledDiv } from "./CategorySelect.styled";

const options = [
  { value: "beef", label: "Beef" },
  { value: "breakfast", label: "Breakfast" },
  { value: "chicken", label: "Chicken" },
  { value: "desserts", label: "Desserts" },
  { value: "goat", label: "Goat" },
  { value: "lamb", label: "Lamb" },
  { value: "miscellaneous", label: "Miscellaneous" },
  { value: "pasta", label: "Pasta" },
  { value: "seafood", label: "Seafood" },
  { value: "side", label: "Side" },
  { value: "starter", label: "Starter" },
  { value: "vegan", label: "Vegan" },
  { value: "pork", label: "Pork" },
  { value: "vegetarian", label: "Vegetarian" },
];

export const CategorySelect = () => {
  const { errors, validate } = useValidation();
  const { recipeCategories } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleChange = async (selectedOptions) => {
    const valueArray = selectedOptions.map((option) => option.value);
    const { isValid, errorMessage } = await validate(
      addRecipeSchema,
      "recipeCategories",
      valueArray
    );
    isValid ? dispatch(setRecipeCategories(valueArray)) : dispatch(setRecipeCategories([]));
    errorMessage
      ? dispatch(setRecipeCategoriesError(errorMessage))
      : dispatch(setRecipeCategoriesError(null));
  };

  const handleBlur = async () => {
    const { errorMessage } = await validate(addRecipeSchema, "recipeCategories", recipeCategories);
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
        options={options}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Categories"
        classNamePrefix="Select"
      />
      {errors.recipeCategories && (
        <span className="validation-error">{errors.recipeCategories}</span>
      )}
    </StyledDiv>
  );
};
