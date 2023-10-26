import PropTypes, { number } from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Select from "react-select";

import {
  setAmount,
  setAmountError,
  setMeasure,
  setMeasureError,
} from "../../redux/slices/addRecipeFormSlice";
import { validationSchema } from "../../validation/addRecipeSchema.js";
import { StyledDiv } from "./MeasureSelect.styled";
import { useFieldValidation } from "../../hooks/useFieldValidation";

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
  const { measureError, validateField } = useFieldValidation(
    validationSchema,
    `recipeIngredients.[${index}].measureType`
  );
  const { amountError } = useFieldValidation(
    validationSchema,
    `recipeIngredients.[${index}].measureType`
  );
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleMeasureChange = async (selectedOption) => {
    const selectedValue = selectedOption.value;
    const { isValid, measureError } = await validateField(selectedValue);

    isValid
      ? dispatch(setMeasure({ index: index, measureType: selectedValue }))
      : dispatch(setMeasure({ index: index, measureType: "" }));

    measureError && dispatch(setMeasureError({ index: index, measureType: measureError }));
  };

  const handleMeasureBlur = async () => {
    console.log("blurred");
    const { measureError } = await validateField(recipeIngredients[index].measureType);
    measureError && dispatch(setMeasureError({ index: index, measureType: measureError }));
  };

  const handleAmountChange = async (e) => {
    const { isValid, amountError } = await validateField(e.target.value);
    isValid
      ? dispatch(setAmount({ index: index, amount: e.target.value }))
      : dispatch(setAmount({ index: index, amount: "" }));

    amountError && setAmountError({ index: index, amount: amountError });
  };

  return (
    <StyledDiv>
      <input
        name="amount"
        type="number"
        value={recipeIngredients[index].amount ? recipeIngredients[index].amount : ""}
        onChange={handleAmountChange}
        aria-label="amount"
        placeholder="5"
      />
      <Select
        onBlur={handleMeasureBlur}
        onChange={handleMeasureChange}
        options={options}
        placeholder="tsp"
        unstyled
        classNamePrefix="Select"
        value={
          recipeIngredients[index].measureType
            ? {
                value: recipeIngredients[index].measureType,
                label: recipeIngredients[index].measureType,
              }
            : null
        }
      />
      {measureError && <span>{measureError}</span>}
    </StyledDiv>
  );
};

MeasureSelect.propTypes = {
  index: PropTypes.number.isRequired,
};
