import PropTypes from "prop-types";

import { StyledFigure } from "./PopularCard.styled";

export const RecipeCard = ({ name, description, image, placeholder }) => {
  return (
    <StyledFigure>
      <picture>
        <source srcSet={image} />
        <img src={placeholder} alt="" loading="lazy" />
      </picture>
      <figcaption>
        <h2>{name}</h2>
        <p>{description}</p>
      </figcaption>
    </StyledFigure>
  );
};

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
