import PropTypes from "prop-types";

import { baseButtonMotion } from "../../common/animations";
import { shortenString } from "../../utils/stringManipulation";
import { Button, Icon } from "..";
import { StyledListItem } from "./RecipeCard.styled";

export const RecipeCard = ({ name, description, cookingTime, image, variant }) => {
  return (
    <StyledListItem $variant={variant}>
      <picture>
        <source />
        <img src={image} width="124px" height="124px" alt="food" />
      </picture>

      <Button type="button" variant="rectSmall" {...baseButtonMotion} aria-label="remove ${name}">
        <Icon icon="trash" />
      </Button>

      <article>
        <h2>{name}</h2>
        <p>{shortenString(description, 150, "...")}</p>
        <div>
          <span>{cookingTime}</span>
          <Button type="button" variant="base" {...baseButtonMotion} aria-label="see ${name}">
            See recipe
          </Button>
        </div>
      </article>
    </StyledListItem>
  );
};

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cookingTime: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default RecipeCard;
