import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Creatable from "react-select/creatable";

import { removeIngredient, setIngredient } from "../../redux/slices/addRecipeFormSlice";
import { Icon } from "../Icon/Icon";
import { MeasureSelect } from "../MeasureSelect/MeasureSelect";
import { StyledDiv } from "./IngredientSelect.styled";

const options = [{ value: "to be added", label: "to be added" }];

export const IngredientSelect = ({ index }) => {
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleRemoveIngredient = (index) => {
    dispatch(removeIngredient(index));
  };

  const handleChange = (option) => {
    dispatch(setIngredient({ index: index, ingredient: option.value }));
  };

  return (
    <StyledDiv>
      <div>
        <Creatable
          openMenuOnFocus
          unstyled
          classNamePrefix="Select"
          formatCreateLabel={(inputValue) => `${inputValue}`}
          options={options}
          placeholder="Ingredient"
          value={
            recipeIngredients[index].ingredient
              ? {
                  value: recipeIngredients[index].ingredient,
                  label: recipeIngredients[index].ingredient,
                }
              : null
          }
          onChange={handleChange}
        />
        <MeasureSelect index={index} />
      </div>

      <button
        type="button"
        aria-label="remove ingredient"
        onClick={() => handleRemoveIngredient(index)}
      >
        <Icon icon="x" />
      </button>
    </StyledDiv>
  );
};

IngredientSelect.propTypes = {
  index: PropTypes.number.isRequired,
};
