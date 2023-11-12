import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { ingredientListItemMotion } from "../../common/animations";
import { useValidation } from "../../hooks/useValidation";
import { setField, setFieldError } from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { IngredientCounter } from "../Counter/IngredientCounter";
import { Heading } from "../Heading/Heading";
import { IngredientSelect } from "../IngredientSelect/IngredientSelect";
import { StyledDiv } from "./IngredientList.styled";

export const IngredientList = ({ className }) => {
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const { validate } = useValidation();
  const dispatch = useDispatch();

  const fields = ["ingredient", "measureType", "amount"];

  const handleValidationOnBlur = (e) => {
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
            setFieldError({
              field: "recipeIngredients",
              subfield: field,
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

    if (isValid) {
      dispatch(
        setField({
          field: "recipeIngredients",
          subfield: "ingredient",
          index: index,
          value: selectedOption.value,
        })
      );
    }

    dispatch(
      setFieldError({
        field: "recipeIngredients",
        subfield: "ingredient",
        index: index,
        error: errorMessage || null,
      })
    );
  };

  const handleMeasureChange = (selectedOption, index) => {
    const { isValid, errorMessage } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].measureType`,
      selectedOption.value
    );

    if (isValid) {
      dispatch(
        setField({
          field: "recipeIngredients",
          subfield: "measureType",
          index: index,
          value: selectedOption.value,
        })
      );
    }

    dispatch(
      setFieldError({
        field: "recipeIngredients",
        subfield: "measureType",
        index: index,
        error: errorMessage || null,
      })
    );
  };

  const handleAmountChange = (e, index) => {
    if (e.target.value <= 0) {
      e.target.value = 1;
    }
    const { isValid, errorMessage } = validate(
      addRecipeSchema,
      `recipeIngredients.[${index}].amount`,
      e.target.value
    );

    if (isValid) {
      dispatch(
        setField({
          field: "recipeIngredients",
          subfield: "amount",
          index: index,
          value: e.target.value,
        })
      );
    }

    dispatch(
      setFieldError({
        field: "recipeIngredients",
        subfield: "amount",
        index: index,
        error: errorMessage || null,
      })
    );
  };

  return (
    <StyledDiv tabIndex="0" className={className} onBlur={(e) => handleValidationOnBlur(e)}>
      <div>
        <Heading as="h2">Ingredients</Heading>
        <IngredientCounter min={1} max={20} />
      </div>
      <div>
        <AnimatePresence>
          {recipeIngredients.map((ingredient, index) => (
            <IngredientSelect
              index={index}
              key={ingredient.id}
              onIngredientChange={handleIngredientChange}
              onMeasureChange={handleMeasureChange}
              onAmountChange={handleAmountChange}
              {...ingredientListItemMotion}
              layout
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
