import debounce from "lodash/debounce";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { useFieldValidation } from "../../hooks/useFieldValidation";
import {
  setRecipeAbout,
  setRecipeAboutError,
  setRecipeTitle,
  setRecipeTitleError,
} from "../../redux/slices/addRecipeFormSlice";
import { validationSchema } from "../../validation/addRecipeSchema.js";
import { StyledLabel } from "./RecipeTextInput.styled";

export const RecipeTextInput = ({ name, placeholder }) => {
  const dispatch = useDispatch();
  const { error, validateField } = useFieldValidation(validationSchema, name);

  const handleChange = debounce(async (e) => {
    const { isValid, errorMessage } = await validateField(e.target.value);
    if (name === "recipeTitle") {
      isValid ? dispatch(setRecipeTitle(e.target.value)) : dispatch(setRecipeTitle(""));
      errorMessage && dispatch(setRecipeTitleError(errorMessage));
    } else if (name === "recipeAbout") {
      isValid ? dispatch(setRecipeAbout(e.target.value)) : dispatch(setRecipeAbout(""));
      errorMessage && dispatch(setRecipeAboutError(errorMessage));
    }
  }, 200);

  const handleBlur = async (e) => {
    const { errorMessage } = await validateField(e.target.value);
    errorMessage && dispatch(setRecipeAboutError(error));
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
      />
      {error && <span className="validation-error">{error}</span>}
    </StyledLabel>
  );
};

RecipeTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
