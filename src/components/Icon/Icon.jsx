import sprite from "../../assets/icons/sprite.svg";
import PropTypes from "prop-types";
import { StyledSvg } from "./Icon.styled";

export const Icon = ({ icon }) => {
  return (
    <StyledSvg $icon={icon}>
      <use href={sprite + `#${icon}`} />
    </StyledSvg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
