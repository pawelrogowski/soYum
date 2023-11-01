import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { useValidation } from "../../hooks/useValidation.js";
import {
  addPreparationStep,
  editPreparationStep,
  setCurrentEditIndex,
  setCurrentTextAreaValue,
  setCurrentTextAreaValueError,
} from "../../redux/slices/addRecipeFormSlice.js";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { Button } from "../Button/Button.jsx";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon.jsx";
import { StyledDiv } from "./RecipePreparationTextArea.styled";
import { debounce } from "lodash";

export const RecipePreparationTextArea = ({ className }) => {
  const { currentTextAreaValue, currentEditIndex, currentTextAreaValueError } = useSelector(
    (state) => state.addRecipeForm
  );
  const dispatch = useDispatch();
  const { validate } = useValidation();

  const handleEnterDown = (e) => {
    const value = e.target.value;
    if (e.key === "Enter") {
      e.preventDefault();
      if (!currentTextAreaValueError && currentTextAreaValue) {
        console.log("?");
        if (!currentEditIndex) {
          dispatch(addPreparationStep(value.trim()));
        } else {
          dispatch(editPreparationStep({ index: currentEditIndex, text: value }));
          dispatch(setCurrentEditIndex(null));
        }
      }
      dispatch(setCurrentTextAreaValue(""));
    }
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    if (!setCurrentTextAreaValueError) {
      if (currentEditIndex === null) {
        dispatch(addPreparationStep(currentTextAreaValue.trim()));
      } else {
        dispatch(editPreparationStep({ index: currentEditIndex, text: currentTextAreaValue }));
        dispatch(setCurrentEditIndex(null));
      }
    }
    dispatch(setCurrentTextAreaValue(""));
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    dispatch(setCurrentEditIndex(null));
    dispatch(setCurrentTextAreaValue(""));
  };

  const handleTextAreaChange = (e) => {
    const value = e.target.value;
    const { errorMessage } = validate(addRecipeSchema, `currentTextAreaValue`, value.trim());
    dispatch(setCurrentTextAreaValue(value));
    errorMessage
      ? dispatch(setCurrentTextAreaValueError(errorMessage))
      : dispatch(setCurrentTextAreaValueError(null));
  };

  const handleValidationOnBlur = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
  };

  return (
    <StyledDiv className={className} onBlur={handleValidationOnBlur}>
      <Heading as="h2">Recipe Preparation</Heading>
      <textarea
        placeholder="Enter preparation steps. Confirm each step with enter"
        value={currentTextAreaValue}
        onKeyDown={handleEnterDown}
        onChange={handleTextAreaChange}
      />
      <Button variant="outlineBig" onClick={handleAddClick} disabled={!currentTextAreaValue}>
        {currentEditIndex !== null ? "Edit existing step" : " Add new step"}
      </Button>
      {currentEditIndex !== null && (
        <Button onClick={handleCancelClick}>
          <Icon icon="x" />
        </Button>
      )}
    </StyledDiv>
  );
};

RecipePreparationTextArea.propTypes = {
  className: PropTypes.string,
};
