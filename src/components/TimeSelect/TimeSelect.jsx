import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { inputErrorMotion } from "../../common/animations.js";
import { timeSelectOptions } from "../../common/selectOptions";
import { useValidation } from "../../hooks/useValidation";
import {
  setRecipeCookingTime,
  setRecipeCookingTimeError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { InputErrorSpan } from "../InputErrorSpan/InputErrorSpan.jsx";
import { StyledDiv } from "./TimeSelect.styled.js";

export const TimeSelect = () => {
  const { validate } = useValidation();
  const ref = useRef();
  const dispatch = useDispatch();
  const { recipeCookingTime, recipeCookingTimeError } = useSelector((state) => state.addRecipeForm);

  const handleChange = (selectedOption) => {
    const { isValid, errorMessage } = validate(
      addRecipeSchema,
      "recipeCookingTime",
      selectedOption.value
    );

    isValid
      ? dispatch(setRecipeCookingTime(selectedOption.value))
      : dispatch(setRecipeCookingTime(""));
    errorMessage
      ? dispatch(setRecipeCookingTimeError(errorMessage))
      : dispatch(setRecipeCookingTimeError(null));
  };

  const handleBlur = () => {
    const { errorMessage } = validate(addRecipeSchema, "recipeCookingTime", recipeCookingTime);

    errorMessage
      ? dispatch(setRecipeCookingTimeError(errorMessage))
      : dispatch(setRecipeCookingTimeError(null));
  };

  const handleWrapperClick = () => {
    ref.current.focus();
  };

  return (
    <StyledDiv
      $hasError={recipeCookingTimeError && "true"}
      onBlur={handleBlur}
      onClick={handleWrapperClick}
      $placeholderShown={!recipeCookingTime}
    >
      <span>{recipeCookingTimeError ? "Cooking Time" : "Cooking Time"}</span>
      <label htmlFor="time-select-value-container" />
      <label htmlFor="time-select" />
      <Select
        ref={ref}
        openMenuOnFocus
        openMenuOnClick
        closeMenuOnSelect
        escapeClearsValue
        unstyled
        classNamePrefix="Select"
        options={timeSelectOptions}
        onChange={handleChange}
        placeholder="5 min"
        inputId="time-select"
        id="time-select-value-container"
      />
      <AnimatePresence>
        {recipeCookingTimeError && (
          <InputErrorSpan
            className="validation-error"
            errorMessage={recipeCookingTimeError}
            {...inputErrorMotion}
          />
        )}
      </AnimatePresence>
    </StyledDiv>
  );
};
