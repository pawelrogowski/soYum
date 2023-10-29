import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Creatable from "react-select/creatable";

import { useValidation } from "../../hooks/useFieldValidation";
import {
  removeIngredient,
  setAmountError,
  setIngredient,
  setIngredientError,
  setMeasureError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { Icon } from "../Icon/Icon";
import { MeasureSelect } from "../MeasureSelect/MeasureSelect";
import { StyledDiv } from "./IngredientSelect.styled";

const options = [
  { value: "to be added", label: "to be added" },
  { value: "asdasd", label: "asdasd" },
];

export const IngredientSelect = ({ index }) => {
  const { validate } = useValidation();
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleChange = async (selectedOption) => {
    const selectedValue = selectedOption.value;

    const { isValid, errorMessage } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].ingredient`,
      selectedValue
    );

    isValid
      ? dispatch(setIngredient({ index: index, ingredient: selectedValue }))
      : dispatch(setIngredient({ index: index, ingredient: "" }));

    errorMessage
      ? dispatch(setIngredientError({ index: index, error: errorMessage }))
      : dispatch(setIngredientError({ index: index, error: null }));
  };

  const handleRemoveIngredient = (index) => {
    dispatch(removeIngredient(index));
  };

  const handleWrapperBlur = async () => {
    const { errorMessage: ingredientError } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].ingredient`,
      recipeIngredients[index].ingredient
    );

    ingredientError
      ? dispatch(setIngredientError({ index: index, error: ingredientError }))
      : dispatch(setIngredientError({ index: index, error: null }));

    const { errorMessage: measureError } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].measureType`,
      recipeIngredients[index].measureType
    );

    measureError
      ? dispatch(setMeasureError({ index: index, error: measureError }))
      : dispatch(setMeasureError({ index: index, error: null }));

    const { errorMessage: amountError } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].amount`,
      recipeIngredients[index].amount
    );

    amountError
      ? dispatch(setAmountError({ index: index, error: amountError }))
      : dispatch(setAmountError({ index: index, error: null }));
  };

  return (
    <>
      <StyledDiv
        $hasError={recipeIngredients[index].ingredientError && "true"}
        onBlur={handleWrapperBlur}
      >
        <div>
          <div className="ingredient-wrapper">
            <Creatable
              openMenuOnFocus
              unstyled
              classNamePrefix="Select"
              formatCreateLabel={(inputValue) => `${inputValue}`}
              options={options}
              placeholder="Ingredient"
              escapeClearsValue
              value={
                recipeIngredients[index].ingredient
                  ? {
                      value: recipeIngredients[index].ingredient,
                      label: recipeIngredients[index].ingredient,
                    }
                  : null
              }
              onChange={handleChange}
            />
            {recipeIngredients[index].ingredientError && (
              <span className="validation-error">{recipeIngredients[index].ingredientError}</span>
            )}
          </div>
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
    </>
  );
};

IngredientSelect.propTypes = {
  index: PropTypes.number.isRequired,
};
