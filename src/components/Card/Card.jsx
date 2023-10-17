import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { StyledFigure } from "./Card.styled";

export const Card = ({ placeholder, img, caption }) => {
  return (
    <StyledFigure>
      <Link to="#">
        <picture>
          <source srcSet={img} />
          <img
            src={placeholder}
            width="343px"
            height="323px"
            alt=""
            loading="lazy"
          />
        </picture>
        <figcaption>{caption}</figcaption>
      </Link>
    </StyledFigure>
  );
};

Card.propTypes = {
  placeholder: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
