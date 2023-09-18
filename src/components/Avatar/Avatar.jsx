import PropTypes from "prop-types";

import { StyledDiv } from "./Avatar.styled";
export function Avatar({ image, placeholder, name = "No Data" }) {
  return (
    <StyledDiv>
      <picture>
        <source srcSet={image} type="image/jpeg" />
        <img src={placeholder} alt="user avatar" />
      </picture>
      <span>{name}</span>
    </StyledDiv>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
