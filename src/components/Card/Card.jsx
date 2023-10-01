import PropTypes from "prop-types";
import { StyledFigure } from "./Card.styled";
import { Link } from "react-router-dom";
export const Card = ({ placeholder, img, caption }) => {
  return (
    <StyledFigure>
      <Link to="#">
        <picture>
          <source srcSet={img} />
          <img src={placeholder} alt=""></img>
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
