import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { useValidation } from "../../hooks/useFieldValidation";
import {
  setAmountError,
  setIngredientError,
  setMeasureError,
} from "../../redux/slices/addRecipeFormSlice";
import { addRecipeSchema } from "../../validation/addRecipeSchema.js";
import { Counter } from "../Counter/Counter";
import { Heading } from "../Heading/Heading";
import { IngredientSelect } from "../IngredientSelect/IngredientSelect";
import { StyledDiv } from "./IngredientList.styled";

export const IngredientList = ({ className }) => {
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const { validate } = useValidation();
  const dispatch = useDispatch();

  const handleWrapperBlur = async () => {
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
        console.log(fieldError);
        dispatch(
          errorActions[field]({
            index: index,
            error: fieldError || null,
          })
        );
      }
    }
  };

  return (
    <StyledDiv className={className} onBlur={handleWrapperBlur}>
      <div>
        <Heading as="h2">Ingredients</Heading>
        <Counter />
      </div>
      <div>
        {recipeIngredients.map((_, index) => (
          <IngredientSelect key={index} index={index} />
        ))}
      </div>
    </StyledDiv>
  );
};

IngredientList.propTypes = {
  className: PropTypes.string,
};
