import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { ingredientListItemMotion } from "../../common/animations";
import { useValidation } from "../../hooks/useValidation";
import {
  setAmount,
  setAmountError,
  setIngredient,
  setIngredientError,
  setMeasure,
  setMeasureError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { IngredientCounter } from "../Counter/IngredientCounter";
import { Heading } from "../Heading/Heading";
import { IngredientSelect } from "../IngredientSelect/IngredientSelect";
import { StyledDiv } from "./IngredientList.styled";

export const IngredientList = ({ className }) => {
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const { validate } = useValidation();
  const dispatch = useDispatch();

  const { fields, errorActions } = useMemo(() => {
    return {
      fields: ["ingredient", "measureType", "amount"],
      errorActions: {
        ingredient: setIngredientError,
        measureType: setMeasureError,
        amount: setAmountError,
      },
    };
  }, []);

  const handleWrapperBlur = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }

    const len = recipeIngredients.length;
    for (let index = 0; index < len; index++) {
      const recipeIngredient = recipeIngredients[index];
      for (const field of fields) {
        if (recipeIngredient[field] !== undefined && recipeIngredient[field].error !== null) {
          const { errorMessage: fieldError } = validate(
            addRecipeSchema,
            `recipeIngredients.[${index}].${field}`,
            recipeIngredient[field]
          );
          dispatch(
            errorActions[field]({
              index: index,
              error: fieldError || null,
            })
          );
        }
      }
    }
  };

  const handleIngredientChange = (selectedOption, index) => {
    const selectedValue = selectedOption.value;

    const { isValid, errorMessage } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].ingredient`,
      selectedValue
    );

    isValid && dispatch(setIngredient({ index: index, ingredient: selectedOption.value }));

    errorMessage
      ? dispatch(setIngredientError({ index: index, error: errorMessage }))
      : dispatch(setIngredientError({ index: index, error: null }));
  };

  const handleMeasureChange = (selectedOption, index) => {
    const { isValid, errorMessage } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].measureType`,
      selectedOption.value
    );

    isValid && dispatch(setMeasure({ index: index, measureType: selectedOption.value }));

    errorMessage
      ? dispatch(setMeasureError({ index: index, error: errorMessage }))
      : dispatch(setMeasureError({ index: index, error: null }));
  };

  const handleAmountChange = (e, index) => {
    const { isValid, errorMessage } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].amount`,
      e.target.value
    );
    isValid && dispatch(setAmount({ index: index, amount: e.target.value }));

    errorMessage
      ? dispatch(setAmountError({ index: index, error: errorMessage }))
      : dispatch(setAmountError({ index: index, error: null }));
  };

  return (
    <StyledDiv tabIndex="0" className={className} onBlur={(e) => handleWrapperBlur(e)}>
      <div>
        <Heading as="h2">Ingredients</Heading>
        <IngredientCounter min={0} max={20} />
      </div>
      <div>
        <AnimatePresence>
          {recipeIngredients.map((_, index) => (
            <IngredientSelect
              index={index}
              key={index}
              onIngredientChange={handleIngredientChange}
              onMeasureChange={handleMeasureChange}
              onAmountChange={handleAmountChange}
              {...ingredientListItemMotion}
            />
          ))}
        </AnimatePresence>
      </div>
    </StyledDiv>
  );
};

IngredientList.propTypes = {
  className: PropTypes.string,
};
