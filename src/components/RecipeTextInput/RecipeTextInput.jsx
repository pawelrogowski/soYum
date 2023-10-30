import debounce from "lodash/debounce";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { useValidation } from "../../hooks/useValidation";
import {
  setRecipeAbout,
  setRecipeAboutError,
  setRecipeTitle,
  setRecipeTitleError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { StyledLabel } from "./RecipeTextInput.styled";

export const RecipeTextInput = ({ name, placeholder }) => {
  const dispatch = useDispatch();
  const { errors, validate } = useValidation();

  const handleChange = debounce(async (e) => {
    const { isValid, errorMessage } = validate(addRecipeSchema, name, e.target.value);
    const setField = name.startsWith("recipeTitle") ? setRecipeTitle : setRecipeAbout;
    const setError = name.startsWith("recipeTitle") ? setRecipeTitleError : setRecipeAboutError;

    isValid ? dispatch(setField(e.target.value)) : dispatch(setField(""));
    errorMessage ? dispatch(setError(errorMessage)) : dispatch(setError(null));
  }, 200);

  const handleBlur = async (e) => {
    const { errorMessage } = validate(addRecipeSchema, name, e.target.value);
    errorMessage
      ? dispatch(setRecipeAboutError(errorMessage))
      : dispatch(setRecipeAboutError(null));
  };

  return (
    <StyledLabel htmlFor={name} $hasError={errors[name] && "true"}>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors[name] && <span className="validation-error">{errors[name]}</span>}
    </StyledLabel>
  );
};

RecipeTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
