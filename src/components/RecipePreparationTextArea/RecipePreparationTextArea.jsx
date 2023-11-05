import { AnimatePresence } from "framer-motion";
import { debounce } from "lodash";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { inputErrorMotion } from "../../common/animations.js";
import { useValidation } from "../../hooks/useValidation.js";
import {
  addPreparationStep,
  editPreparationStep,
  setField,
  setFieldError,
} from "../../redux/slices/addRecipeFormSlice.js";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { Button } from "../Button/Button.jsx";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon.jsx";
import { InputErrorSpan } from "../InputErrorSpan/InputErrorSpan.jsx";
import { StyledDiv } from "./RecipePreparationTextArea.styled";

export const RecipePreparationTextArea = ({ className }) => {
  const dispatch = useDispatch();
  const { validate } = useValidation();

  const { currentTextAreaValue, currentEditIndex, currentTextAreaValueError } = useSelector(
    (state) => state.addRecipeForm
  );

  const handleErrorState = (value) => {
    const { errorMessage } = validate(addRecipeSchema, "currentTextAreaValue", value.trim());
    dispatch(setField({ field: "currentTextAreaValue", value }));
    errorMessage
      ? dispatch(setFieldError({ field: "currentTextAreaValue", error: errorMessage }))
      : dispatch(setFieldError({ field: "currentTextAreaValue", error: null }));
  };

  const handleStepUpdate = debounce((value) => {
    if (currentEditIndex !== null && currentEditIndex !== undefined) {
      dispatch(editPreparationStep({ index: currentEditIndex, text: value }));
      dispatch(setField({ field: "currentEditIndex", value: null }));
    } else {
      dispatch(addPreparationStep(value.trim()));
    }
    dispatch(setField({ field: "currentTextAreaValue", value: "" }));
  }, 100);

  const handleKeyDown = (e) => {
    const value = e.target.value;

    if (e.key === "Enter") {
      e.preventDefault();
      if (!currentTextAreaValueError && value) {
        handleStepUpdate(value);
      }
    }
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    if (!currentTextAreaValueError) {
      handleStepUpdate(currentTextAreaValue);
    }
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    dispatch(setField({ field: "currentEditIndex", value: null }));
    dispatch(setField({ field: "currentTextAreaValue", value: "" }));
  };

  const handleTextAreaChange = (e) => {
    handleErrorState(e.target.value);
  };

  const handleValidationOnBlur = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    handleErrorState(e.target.value);
  };

  const showError = currentTextAreaValueError;

  return (
    <StyledDiv
      className={className}
      onBlur={handleValidationOnBlur}
      $hasError={showError && "true"}
    >
      <Heading as="h2">Recipe Preparation</Heading>
      <div>
        <textarea
          placeholder="Enter preparation steps"
          value={currentTextAreaValue}
          onKeyDown={handleKeyDown}
          onChange={handleTextAreaChange}
        />
        <AnimatePresence>
          {showError && (
            <InputErrorSpan
              className="validation-error"
              errorMessage={currentTextAreaValueError}
              {...inputErrorMotion}
            />
          )}
        </AnimatePresence>
      </div>
      <Button
        variant="outlineBig"
        onClick={handleAddClick}
        disabled={currentEditIndex !== null || currentTextAreaValueError !== null}
      >
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
