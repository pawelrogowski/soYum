import { AnimatePresence } from "framer-motion";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { inputErrorMotion } from "../../common/animations";
import { useValidation } from "../../hooks/useValidation";
import {
  setRecipeAbout,
  setRecipeAboutError,
  setRecipeTitle,
  setRecipeTitleError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { InputErrorSpan } from "../InputErrorSpan/InputErrorSpan";
import { StyledLabel } from "./RecipeTextInput.styled";

export const RecipeTextInput = ({ name, placeholder }) => {
  const { recipeTitleError, recipeAboutError } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();
  const { validate } = useValidation();

  const handleChange = debounce((e) => {
    const { isValid, errorMessage } = validate(addRecipeSchema, name, e.target.value);
    const setField = name.startsWith("recipeTitle") ? setRecipeTitle : setRecipeAbout;
    const setError = name.startsWith("recipeTitle") ? setRecipeTitleError : setRecipeAboutError;

    isValid ? dispatch(setField(e.target.value)) : dispatch(setField(""));
    errorMessage ? dispatch(setError(errorMessage)) : dispatch(setError(null));
  }, 200);

  const handleBlur = (e) => {
    const { errorMessage } = validate(addRecipeSchema, name, e.target.value);
    const setError = name.startsWith("recipeTitle") ? setRecipeTitleError : setRecipeAboutError;
    errorMessage ? dispatch(setError(errorMessage)) : dispatch(setError(null));
  };

  return (
    <StyledLabel
      htmlFor={name}
      $hasError={(name.startsWith("recipeTitle") ? recipeTitleError : recipeAboutError) && "true"}
    >
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <AnimatePresence>
        {(name.startsWith("recipeTitle") ? recipeTitleError : recipeAboutError) && (
          <InputErrorSpan
            className="validation-error"
            errorMessage={name.startsWith("recipeTitle") ? recipeTitleError : recipeAboutError}
            {...inputErrorMotion}
          />
        )}
      </AnimatePresence>
    </StyledLabel>
  );
};

RecipeTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
