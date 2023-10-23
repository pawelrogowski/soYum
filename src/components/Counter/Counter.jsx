import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { setRecipeIngredientNumber } from "../../redux/slices/addRecipeFormSlice";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./Counter.styled";
export const Counter = () => {
  const { recipeIngredientNumber } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (recipeIngredientNumber < 51) {
      dispatch(setRecipeIngredientNumber(recipeIngredientNumber + 1));
    }
  };
  const handleDecrement = () => {
    if (recipeIngredientNumber > 1) {
      dispatch(setRecipeIngredientNumber(recipeIngredientNumber - 1));
    }
  };

  return (
    <StyledDiv>
      <button
        type="button"
        aria-label="remove last ingredient"
        onClick={handleDecrement}
        disabled={recipeIngredientNumber === 1}
      >
        <Icon icon="minus" />
      </button>

      <span>{recipeIngredientNumber}</span>

      <button
        type="button"
        aria-label="add new ingredient"
        onClick={handleIncrement}
        disabled={recipeIngredientNumber > 49}
      >
        <Icon icon="plus" />
      </button>
    </StyledDiv>
  );
};
