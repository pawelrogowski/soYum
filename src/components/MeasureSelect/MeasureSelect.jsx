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
  const { errors, validate } = useValidation(
    addRecipeSchema,
    `recipeIngredients.[${index}].measureType`
  );
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleMeasureChange = async (selectedOption) => {
    const selectedValue = selectedOption.value;
    const { isValid } = await validate(addRecipeSchema, "recipeMeasureType", selectedValue);

    isValid
      ? dispatch(setMeasure({ index: index, measureType: selectedValue }))
      : dispatch(setMeasure({ index: index, measureType: "" }));

    errors.recipeMeasureType &&
      dispatch(setMeasureError({ index: index, measureType: errors.recipeMeasureType }));
  };

  const handleMeasureBlur = async () => {
    await validate(addRecipeSchema, "recipeMeasureType", recipeIngredients[index].measureType);
    errors.recipeMeasureType &&
      dispatch(setMeasureError({ index: index, measureType: errors.recipeMeasureType }));
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
      {errors.recipeMeasureType && <span>{errors.recipeMeasureType}</span>}
    </StyledDiv>
  );
};

MeasureSelect.propTypes = {
  index: PropTypes.number.isRequired,
};
