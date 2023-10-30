import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { useValidation } from "../../hooks/useFieldValidation";
import {
  setAmountError,
  setIngredient,
  setIngredientError,
  setMeasureError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { IngredientCounter } from "../Counter/IngredientCounter";
import { Heading } from "../Heading/Heading";
import { IngredientSelect } from "../IngredientSelect/IngredientSelect";
import { StyledDiv } from "./IngredientList.styled";

const listItemMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    ease: "easeInOut",
    duration: 0.1,
  },
};

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

      isValid
        ? dispatch(setIngredient({ index: index, ingredient: selectedValue }))
        : dispatch(setIngredient({ index: index, ingredient: "" }));

      errorMessage
        ? dispatch(setIngredientError({ index: index, error: errorMessage }))
        : dispatch(setIngredientError({ index: index, error: null }));
    },
    [validate, dispatch]
  );

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
    console.log(e);
    const fields = ["ingredient", "measureType", "amount"];
    const errorActions = {
      ingredient: setIngredientError,
      measureType: setMeasureError,
      amount: setAmountError,
    };

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
  //
  return (
    <StyledDiv tabIndex="0" className={className} onBlur={(e) => handleWrapperBlur(e)}>
      <div>
        <Heading as="h2">Ingredients</Heading>
        <IngredientCounter min={1} max={20} />
      </div>
      <div>
        <AnimatePresence>
          {recipeIngredients.map((_, index) => (
            <IngredientSelect
              key={index}
              index={index}
              onIngredientChange={handleIngredientChange}
              onIngredientBlur={handleIngredientBlur}
              {...listItemMotion}
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
