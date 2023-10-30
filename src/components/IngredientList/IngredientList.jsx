import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useCallback, useMemo } from "react";
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

  const handleIngredientChange = useCallback(
    (selectedOption, index) => {
      const selectedValue = selectedOption.value;

      const { isValid, errorMessage } = validate(
        addRecipeSchema,
        `recipeIngredients.[${index}].ingredient`,
        selectedValue
      );

      const ingredient = isValid ? selectedValue : "";
      const error = errorMessage || null;
      dispatch(setIngredient({ index, ingredient, error }));
    },
    [validate, dispatch]
  );

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

  const handleIngredientBlur = useCallback(
    (e, index) => {
      if (e.currentTarget && e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
        return;
      }
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
    },
    [validate, recipeIngredients, dispatch]
  );

  const handleWrapperBlur = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }

    const len = recipeIngredients.length;
    for (let index = 0; index < len; index++) {
      const recipeIngredient = recipeIngredients[index];
      for (const field of fields) {
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
  };

  const handleMeasureChange = (selectedOption, index) => {
    const { isValid, errorMessage } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].measureType`,
      selectedOption.value
    );

    isValid
      ? dispatch(setMeasure({ index: index, measureType: selectedOption.value }))
      : dispatch(setMeasure({ index: index, measureType: "" }));

    errorMessage
      ? dispatch(setMeasureError({ index: index, error: errorMessage }))
      : dispatch(setMeasureError({ index: index, error: null }));
  };

  const handleAmountChange = (e, index) => {
    console.log("2");
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
    <StyledDiv tabIndex="0" className={className} onBlur={(e) => handleWrapperBlur(e)}>
      <div>
        <Heading as="h2">Ingredients</Heading>
        <IngredientCounter min={1} max={200} />
      </div>
      <div>
        <AnimatePresence>
          {recipeIngredients.map((_, index) => (
            <IngredientSelect
              key={index}
              index={index}
              onIngredientChange={handleIngredientChange}
              onIngredientBlur={handleIngredientBlur}
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
