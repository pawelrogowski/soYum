import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Creatable from "react-select/creatable";

import { useFieldValidation } from "../../hooks/useFieldValidation";
import {
  removeIngredient,
  setIngredient,
  setIngredientError,
} from "../../redux/slices/addRecipeFormSlice";
import { validationSchema } from "../../validation/addRecipeSchema.js";
import { Icon } from "../Icon/Icon";
import { MeasureSelect } from "../MeasureSelect/MeasureSelect";
import { StyledDiv } from "./IngredientSelect.styled";

const options = [
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
];

export const IngredientSelect = ({ index }) => {
  const { error, validateField } = useFieldValidation(
    validationSchema,
    `recipeIngredients.[${index}].ingredient`
  );
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleChange = async (selectedOption) => {
    const selectedValue = selectedOption.value;
    console.log(typeof selectedValue, selectedValue);
    const { isValid, error } = await validateField(selectedValue);

    isValid
      ? dispatch(setIngredient({ index: index, ingredient: selectedValue }))
      : dispatch(setIngredient({ index: index, ingredient: "" }));

    error && dispatch(setIngredientError({ index: index, ingredient: error }));
  };

  const handleBlur = async () => {
    const { error } = await validateField(recipeIngredients[index].ingredient);
    error && dispatch(setIngredientError({ index: index, ingredient: error }));
  };

  const handleRemoveIngredient = (index) => {
    dispatch(removeIngredient(index));
  };

  return (
    <>
      <StyledDiv>
        <div>
          <Creatable
            openMenuOnFocus
            unstyled
            classNamePrefix="Select"
            formatCreateLabel={(inputValue) => `${inputValue}`}
            options={options}
            placeholder="Ingredient"
            value={
              recipeIngredients[index].ingredient
                ? {
                    value: recipeIngredients[index].ingredient,
                    label: recipeIngredients[index].ingredient,
                  }
                : null
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <MeasureSelect index={index} />
        </div>

        <button
          type="button"
          aria-label="remove ingredient"
          onClick={() => handleRemoveIngredient(index)}
        >
          <Icon icon="x" />
        </button>
      </StyledDiv>
      {error && <span>{error}</span>}
    </>
  );
};

IngredientSelect.propTypes = {
  index: PropTypes.number.isRequired,
};
