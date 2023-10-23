import PropTypes from "prop-types";

import placeholder from "../../assets/icons/product-placeholder.svg";
import { truncateSentences } from "../../utils/stringManipulation";
import { StyledFigure } from "./PopularCard.styled";

export const PopularCard = ({ name, description, image }) => {
  const modifiedDescription = truncateSentences(description, 2);

  return (
    <StyledFigure>
      <picture>
        <source srcSet={image} />
        <img src={placeholder} alt="" loading="lazy" width="104px" height="85px" />
      </picture>
      <figcaption>
        <h2>{name}</h2>
        <p>{modifiedDescription}</p>
      </figcaption>
    </StyledFigure>
  );
};

PopularCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
