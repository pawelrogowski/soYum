import PropTypes from "prop-types";

import { RecipeCard } from "..";
import { StyledSection } from "./RecipeList.styled";

export const RecipeList = ({ data }) => {
  return (
    <StyledSection>
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cookingTime: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecipeList;
