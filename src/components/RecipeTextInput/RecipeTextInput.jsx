import { AnimatePresence } from "framer-motion";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { inputErrorMotion } from "../../common/animations";
import { useValidation } from "../../hooks/useValidation";
import { setField, setFieldError } from "../../redux/slices/addRecipeFormSlice.js";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { InputErrorSpan } from "../InputErrorSpan/InputErrorSpan";
import { StyledLabel } from "./RecipeTextInput.styled";

export const RecipeTextInput = ({ name, placeholder }) => {
  const { recipeTitleError, recipeAboutError } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();
  const { validate } = useValidation();
  const isRecipeTitle = name.startsWith("recipeTitle");

  const { field, error } = useMemo(
    () => ({
      field: isRecipeTitle ? "recipeTitle" : "recipeAbout",
      error: isRecipeTitle ? recipeTitleError : recipeAboutError,
    }),
    [isRecipeTitle, recipeTitleError, recipeAboutError]
  );

  const handleChange = debounce((e) => {
    const { isValid, errorMessage } = validate(addRecipeSchema, name, e.target.value);
    dispatch(setField({ field: field, value: isValid ? e.target.value : "" }));
    dispatch(setFieldError({ field: field, error: errorMessage || null }));
  }, 100);

  const handleBlur = (e) => {
    const { errorMessage } = validate(addRecipeSchema, name, e.target.value);
    dispatch(setFieldError({ field: field, error: errorMessage || null }));
  };

  return (
    <StyledLabel htmlFor={name} $hasError={error && "true"}>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
      />
      <AnimatePresence>
        {error && (
          <InputErrorSpan className="validation-error" errorMessage={error} {...inputErrorMotion} />
        )}
      </AnimatePresence>
    </StyledLabel>
  );
};

RecipeTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default RecipeTextInput;
