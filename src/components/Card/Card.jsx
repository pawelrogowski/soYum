import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { galleryMotion } from "../../common/animations";
import { StyledFigure } from "./Card.styled";

export const Card = ({ placeholder, img, caption, itemId }) => {
  return (
    <StyledFigure {...galleryMotion}>
      <Link to={`/recipe/${itemId}`}>
        <picture>
          <source srcSet={img} />
          <img src={placeholder} width="343px" height="323px" alt="" loading="lazy" />
        </picture>
        <figcaption>{caption}</figcaption>
      </Link>
    </StyledFigure>
  );
};

Card.propTypes = {
  placeholder: PropTypes.string.isRequired,
  itemId: PropTypes.any.isRequired,
  img: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
