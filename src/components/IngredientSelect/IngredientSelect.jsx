import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { memo, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Select from "react-select";
import Creatable from "react-select/creatable";

import { baseIconMotion, inputErrorMotion } from "../../common/animations";
import { ingredientSelectOptions, measureTypeSelectOptions } from "../../common/selectOptions";
import { removeIngredient } from "../../redux/slices/addRecipeFormSlice";
import { Icon } from "../Icon/Icon";
import { InputErrorSpan } from "../InputErrorSpan/InputErrorSpan";
import { StyledDiv } from "./IngredientSelect.styled";

const IngredientSelectComponent = ({
  index,
  onIngredientChange,
  onMeasureChange,
  onAmountChange,
  ...props
}) => {
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();
  const ingredientRef = useRef(null);
  const measureRef = useRef(null);

  const handleRemoveIngredient = (index) => {
    if (recipeIngredients[index]) {
      dispatch(removeIngredient(index));
    }
  };

  const handleIngredientClick = (e) => {
    e.preventDefault();
    ingredientRef.current.focus();
  };

  const handleMeasureClick = (e) => {
    e.preventDefault();
    measureRef.current.focus();
  };

  return (
    <StyledDiv
      {...props}
      $hasError={
        recipeIngredients[index] &&
        (recipeIngredients[index].ingredientError ||
          recipeIngredients[index].amountError ||
          recipeIngredients[index].measureTypeError) &&
        "true"
      }
    >
      <>
        <div className="ingredient-flex-row">
          <div className="ingredient-wrapper" onClick={handleIngredientClick}>
            <Creatable
              openMenuOnFocus
              unstyled
              classNamePrefix="Select"
              formatCreateLabel={(inputValue) => `${inputValue}`}
              options={ingredientSelectOptions}
              placeholder="Ingredient"
              escapeClearsValue
              ref={ingredientRef}
              value={
                recipeIngredients[index] && recipeIngredients[index].ingredient
                  ? {
                      value: recipeIngredients[index].ingredient,
                      label: recipeIngredients[index].ingredient,
                    }
                  : null
              }
              onChange={(selectedOption) => onIngredientChange(selectedOption, index)}
            />
            <AnimatePresence>
              {recipeIngredients[index] && recipeIngredients[index].ingredientError && (
                <InputErrorSpan
                  className="validation-error"
                  errorMessage={recipeIngredients[index].ingredientError}
                  {...inputErrorMotion}
                />
              )}
            </AnimatePresence>
          </div>
          <div className="select-measure-wrapper" onClick={handleMeasureClick}>
            <label name="amount" htmlFor={`amount-${index}`}>
              <input
                name="amount"
                type="number"
                id={`amount-${index}`}
                onChange={(e) => onAmountChange(e, index)}
                aria-label="amount"
                placeholder="5"
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.preventDefault()}
                min="0"
                step="0.1"
              />
              <AnimatePresence>
                {recipeIngredients[index] && recipeIngredients[index].amountError && (
                  <InputErrorSpan
                    className="validation-error--centered"
                    errorMessage={recipeIngredients[index].amountError}
                    {...inputErrorMotion}
                  />
                )}
              </AnimatePresence>
            </label>
            <label>
              <Select
                onChange={(selectedOption) => onMeasureChange(selectedOption, index)}
                options={measureTypeSelectOptions}
                placeholder="tsp"
                unstyled
                isSearchable={false}
                classNamePrefix="Select"
                escapeClearsValue={true}
                ref={measureRef}
                openMenuOnFocus
                openMenuOnClick
                closeMenuOnSelect
                inputId={`measure-type-${index}`}
              />
              <AnimatePresence>
                {recipeIngredients[index] && recipeIngredients[index].measureTypeError && (
                  <InputErrorSpan
                    className="validation-error--centered"
                    errorMessage={recipeIngredients[index].measureTypeError}
                    {...inputErrorMotion}
                  />
                )}
              </AnimatePresence>
            </label>
          </div>
        </div>
      </>
      <button
        type="button"
        aria-label="remove ingredient"
        onClick={() => handleRemoveIngredient(index)}
        disabled={index === 0}
      >
        <Icon icon="x" {...baseIconMotion} />
      </button>
    </StyledDiv>
  );
};

IngredientSelectComponent.propTypes = {
  index: PropTypes.number.isRequired,
  onIngredientBlur: PropTypes.func,
  onIngredientChange: PropTypes.func,
  onMeasureChange: PropTypes.func,
  onAmountChange: PropTypes.func,
};

export const IngredientSelect = memo(IngredientSelectComponent);
