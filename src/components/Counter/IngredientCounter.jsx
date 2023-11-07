import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { baseIconMotion } from "../../common/animations";
import { addIngredient, removeLastIngredient } from "../../redux/slices/addRecipeFormSlice";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./IngredientCounter.styled";

export const IngredientCounter = ({ min = 0, max = Infinity }) => {
  const dispatch = useDispatch();
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);

  const handleIncrement = () => {
    if (recipeIngredients.length < max) {
      dispatch(
        addIngredient({
          ingredient: "",
          measureType: "",
          amount: "",
        })
      );
    }
  };

  const handleDecrement = () => {
    if (recipeIngredients.length > min) {
      dispatch(removeLastIngredient());
    }
  };

  return (
    <StyledDiv>
      <button
        type="button"
        aria-label="remove last ingredient"
        onClick={handleDecrement}
        disabled={recipeIngredients.length <= min}
      >
        <Icon icon="minus" {...baseIconMotion} />
      </button>

      <span>{recipeIngredients.length}</span>

      <button
        type="button"
        aria-label="add new ingredient"
        onClick={handleIncrement}
        disabled={recipeIngredients.length >= max}
      >
        <Icon icon="plus" {...baseIconMotion} />
      </button>
    </StyledDiv>
  );
};

IngredientCounter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
