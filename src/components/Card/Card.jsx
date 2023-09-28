import PropTypes from "prop-types";
import { StyledFigure } from "./Card.styled";

export const Card = ({ placeholder, img, caption }) => {
  return (
    <StyledFigure>
      <picture>
        <source srcSet={img} />
        <img src={placeholder} alt={caption}></img>
      </picture>
      <figcaption>{caption}</figcaption>
    </StyledFigure>
  );
};

Card.propTypes = {
  placeholder: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
