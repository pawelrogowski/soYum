import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Select from "react-select";

import { useValidation } from "../../hooks/useFieldValidation";
import {
  setAmount,
  setAmountError,
  setMeasure,
  setMeasureError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { InputErrorSpan } from "../InputErrorSpan/InputErrorSpan";
import { StyledDiv } from "./MeasureSelect.styled";

const options = [
  { value: "tbs", label: "tbs" },
  { value: "tsp", label: "tsp" },
  { value: "kg", label: "kg" },
  { value: "g", label: "g" },
  { value: "cup", label: "cup" },
  { value: "oz", label: "oz" },
  { value: "lb", label: "lb" },
  { value: "ml", label: "ml" },
  { value: "l", label: "l" },
];

export const MeasureSelect = ({ index }) => {
  const { errors, validate } = useValidation();
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();
  const handleMeasureChange = async (selectedOption) => {
    const selectedValue = selectedOption.value;
    const { isValid, errorMessage } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].measureType`,
      selectedValue
    );

    isValid
      ? dispatch(setMeasure({ index: index, measureType: selectedValue }))
      : dispatch(setMeasure({ index: index, measureType: "" }));

    errorMessage
      ? dispatch(setMeasureError({ index: index, error: errors.recipeMeasureType }))
      : dispatch(setMeasureError({ index: index, error: errors.recipeMeasureType }));
  };

  const handleAmountChange = (e) => {
    const { isValid, errorMessage } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].amount`,
      e.target.value
    );
    isValid
      ? dispatch(setAmount({ index: index, amount: e.target.value }))
      : dispatch(setAmount({ index: index, amount: "" }));

    errorMessage
      ? dispatch(setAmountError({ index: index, error: errorMessage }))
      : dispatch(setAmountError({ index: index, error: null }));
  };

  return (
    <StyledDiv
      $hasError={
        (recipeIngredients[index].measureTypeError || recipeIngredients[index].amountError) &&
        "true"
      }
    >
      <input
        name="amount"
        type="number"
        onChange={handleAmountChange}
        aria-label="amount"
        placeholder="5"
      />
      <Select
        onChange={handleMeasureChange}
        options={options}
        placeholder="tsp"
        unstyled
        isSearchable={false}
        classNamePrefix="Select"
        escapeClearsValue={true}
        value={
          recipeIngredients[index].measureType
            ? {
                value: recipeIngredients[index].measureType,
                label: recipeIngredients[index].measureType,
              }
            : null
        }
      />
      {(recipeIngredients[index].measureTypeError || recipeIngredients[index].amountError) && (
        <InputErrorSpan
          className="validation-error"
          errorMessage={
            recipeIngredients[index].measureTypeError || recipeIngredients[index].amountError
          }
        />
      )}
    </StyledDiv>
  );
};

MeasureSelect.propTypes = {
  index: PropTypes.number.isRequired,
};
