import { AnimatePresence } from "framer-motion";
import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { inputErrorMotion } from "../../common/animations.js";
import { categorySelectOptions } from "../../common/selectOptions";
import { useValidation } from "../../hooks/useValidation";
import { setField, setFieldError } from "../../redux/slices/addRecipeFormSlice.js";
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
      dispatch(setField({ field: "recipeCategories", value: valueArray }));

      const { isValid, errorMessage } = validate(addRecipeSchema, "recipeCategories", valueArray);

      if (errorMessage || !isValid) {
        dispatch(setFieldError({ field: "recipeCategories", error: errorMessage }));
      } else {
        dispatch(setFieldError({ field: "recipeCategories", error: null }));
      }
    },
    [dispatch, validate]
  );

  const handleBlur = useCallback(() => {
    const { errorMessage } = validate(addRecipeSchema, "recipeCategories", recipeCategories);

    if (errorMessage) {
      dispatch(setFieldError({ field: "recipeCategories", error: errorMessage }));
    } else {
      dispatch(setFieldError({ field: "recipeCategories", error: null }));
    }
  }, [dispatch, validate, recipeCategories]);

  const handleWrapperClick = useCallback((event) => {
    if (event.target !== ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <StyledDiv onClick={handleWrapperClick} $hasError={recipeCategoriesError && "true"}>
      <Select
        ref={ref}
        isMulti
        unstyled
        options={categorySelectOptions}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Categories"
        classNamePrefix="Select"
        closeMenuOnSelect
        isSearchable
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

export default CategorySelect;
