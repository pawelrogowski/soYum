import { AnimatePresence, usePresence } from "framer-motion";
import PropTypes from "prop-types";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Creatable from "react-select/creatable";

import { ingredientSelectOptions } from "../../common/selectOptions";
import { removeIngredient } from "../../redux/slices/addRecipeFormSlice";
import { Icon } from "../Icon/Icon";
import { InputErrorSpan } from "../InputErrorSpan/InputErrorSpan";
import { MeasureSelect } from "../MeasureSelect/MeasureSelect";
import { StyledDiv } from "./IngredientSelect.styled";

const IngredientSelectComponent = ({ index, onIngredientChange, onIngredientBlur, ...props }) => {
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();
  const [isPresent] = usePresence();

  if (!isPresent) return null;
  const handleRemoveIngredient = (index) => {
    if (recipeIngredients[index]) {
      dispatch(removeIngredient(index));
    }
  };
  return (
    <>
      <StyledDiv
        onBlur={(e) => onIngredientBlur(e, index)}
        {...props}
        $hasError={recipeIngredients[index].ingredientError && "true"}
      >
        <div>
          <div className="ingredient-wrapper">
            <Creatable
              openMenuOnFocus
              unstyled
              classNamePrefix="Select"
              formatCreateLabel={(inputValue) => `${inputValue}`}
              options={ingredientSelectOptions}
              placeholder="Ingredient*"
              escapeClearsValue
              value={
                recipeIngredients[index].ingredient
                  ? {
                      value: recipeIngredients[index].ingredient,
                      label: recipeIngredients[index].ingredient,
                    }
                  : null
              }
              onChange={(selectedOption) => onIngredientChange(selectedOption, index)}
            />
            <AnimatePresence>
              {recipeIngredients[index].ingredientError && (
                <InputErrorSpan
                  className="validation-error"
                  errorMessage={recipeIngredients[index].ingredientError}
                />
              )}
            </AnimatePresence>
          </div>
          <MeasureSelect index={index} />
        </div>
        <button
          type="button"
          aria-label="remove ingredient"
          onClick={() => handleRemoveIngredient(index)}
          disabled={index === 0}
        >
          <Icon icon="x" />
        </button>
      </StyledDiv>
    </>
  );
};
IngredientSelectComponent.propTypes = {
  index: PropTypes.number.isRequired,
  onIngredientBlur: PropTypes.func,
  onIngredientChange: PropTypes.func,
};

export const IngredientSelect = memo(IngredientSelectComponent);
