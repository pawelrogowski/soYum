import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { timeSelectOptions } from "../../common/selectOptions";
import { useValidation } from "../../hooks/useFieldValidation";
import {
  setRecipeCookingTime,
  setRecipeCookingTimeError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { StyledDiv } from "./TimeSelect.styled.js";

export const TimeSelect = () => {
  const { errors, validate } = useValidation();
  const ref = useRef();
  const dispatch = useDispatch();
  const { recipeCookingTime } = useSelector((state) => state.addRecipeForm);

  const handleChange = async (selectedOption) => {
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

  const handleBlur = async () => {
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
      $hasError={errors.recipeCookingTime && "true"}
      onBlur={handleBlur}
      onClick={handleWrapperClick}
      $placeholderShown={!recipeCookingTime}
    >
      <span>{errors.recipeCookingTime ? "Cooking Time" : "Cooking Time*"}</span>
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
      />
      {errors.recipeCookingTime && (
        <span className="validation-error">{errors.recipeCookingTime}</span>
      )}
    </StyledDiv>
  );
};
