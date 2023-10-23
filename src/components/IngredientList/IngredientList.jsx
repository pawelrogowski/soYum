import PropTypes from "prop-types";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { Counter } from "../Counter/Counter";
import { Heading } from "../Heading/Heading";
import { IngredientSelect } from "../IngredientSelect/IngredientSelect";
import { StyledDiv } from "./IngredientList.styled";
export const IngredientList = ({ className }) => {
  const { recipeIngredients } = useSelector((state) => state.addRecipeForm);

  return (
    <StyledDiv className={className}>
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
