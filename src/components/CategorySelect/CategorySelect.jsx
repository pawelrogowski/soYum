import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";

import { useFieldValidation } from "../../hooks/useFieldValidation";
import {
  setRecipeCategories,
  setRecipeCategoriesError,
} from "../../redux/slices/addRecipeFormSlice";
import { validationSchema } from "../../validation/addRecipeSchema.js";
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
  const { error, validateField } = useFieldValidation(validationSchema, "recipeCategories");
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleChange = async (selectedOptions) => {
    const { isValid, errorMessage } = await validateField(selectedOptions);
    isValid
      ? setRecipeCategories(selectedOptions.map((option) => option.value))
      : setRecipeCategories([]);
    errorMessage && dispatch(setRecipeCategoriesError(errorMessage));
  };

  const handleBlur = async (e) => {
    console.log(e);
    const { errorMessage } = await validateField(e);
    errorMessage && dispatch(setRecipeCategoriesError(errorMessage));
  };

  const handleWrapperClick = () => ref.current.focus();

  return (
    <>
      <StyledDiv onClick={handleWrapperClick}>
        <Select
          ref={ref}
          openMenuOnFocus
          isMulti
          unstyled
          classNamePrefix="Select"
          options={options}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Categories"
        />
      </StyledDiv>
      <span>{error}</span>
    </>
  );
};
