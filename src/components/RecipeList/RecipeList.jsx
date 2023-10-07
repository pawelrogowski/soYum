import PropTypes from "prop-types";

import { Heading } from "../Heading/Heading";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { StyledSection } from "./RecipeList.styled";

export const RecipeList = ({ data }) => {
  return (
    <StyledSection>
      <Heading as="h1">My Recipes</Heading>
      <ul>
        {data.map((item, index) => (
          <RecipeCard
            key={index}
            name={item.name}
            cookingTime={item.cookingTime}
            description={item.description}
            image={item.image}
          />
        ))}
      </ul>
    </StyledSection>
  );
};

RecipeList.propTypes = {
  data: PropTypes.array.isRequired,
};
