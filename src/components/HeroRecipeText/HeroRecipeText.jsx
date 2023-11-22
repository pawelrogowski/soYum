import PropTypes from "prop-types";

import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./HeroRecipeText.styled";

export const HeroRecipeText = ({ id, title, about, cookingTime }) => {
  const handleAddToFavorites = (recipeId) => {
    console.log(recipeId, "added to fav");
  };

  return (
    <StyledDiv>
      <h1>{title}</h1>
      <p>{about}</p>
      <Button variant="outlineBig" onClick={() => handleAddToFavorites(id)}>
        Add to favorite recipes
      </Button>
      <div>
        <Icon icon="clock" />
        <span>{cookingTime}</span>
      </div>
    </StyledDiv>
  );
};

HeroRecipeText.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  cookingTime: PropTypes.string.isRequired,
};

export default HeroRecipeText;
