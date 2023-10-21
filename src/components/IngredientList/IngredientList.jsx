import { Counter } from "../Counter/Counter";
import { Heading } from "../Heading/Heading";
import { IngredientSelect } from "../IngredientSelect/IngredientSelect";
import { StyledDiv } from "./IngredientList.styled";

export const IngredientList = () => {
  return (
    <StyledDiv>
      <div>
        <Heading as="h2">Ingredients</Heading>
        <Counter />
      </div>
      <div>
        <IngredientSelect />
      </div>
    </StyledDiv>
  );
};
