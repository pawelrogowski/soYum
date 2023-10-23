import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { addIngredient, removeLastIngredient } from "../../redux/slices/addRecipeFormSlice";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./Counter.styled";
export const Counter = () => {
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(
      addIngredient({
        ingredient: "",
        measureType: "",
        amount: 0,
      })
    );
  };
  const handleDecrement = () => {
    dispatch(removeLastIngredient());
  };
  return (
    <StyledDiv>
      <button
        type="button"
        aria-label="remove last ingredient"
        onClick={handleDecrement}
        disabled={recipeIngredients.length === 1}
      >
        <Icon icon="minus" />
      </button>

      <span>{recipeIngredients.length}</span>

      <button
        type="button"
        aria-label="add new ingredient"
        onClick={handleIncrement}
        disabled={recipeIngredients.length > 49}
      >
        <Icon icon="plus" />
      </button>
    </StyledDiv>
  );
};
