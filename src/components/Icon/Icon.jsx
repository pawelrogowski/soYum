import sprite from "../../assets/icons/sprite.svg";
import PropTypes from "prop-types";
import { StyledSvg } from "./Icon.styled";

export const Icon = ({ icon, hero = false }) => {
  let viewBoxAttr = "";
  let preserveAspectRatioAttr = "";

  if (hero) {
    viewBoxAttr = "0 0 456 388";
    preserveAspectRatioAttr = "xMidYMax meet";
  }

  return hero ? (
    <StyledSvg
      $icon={icon}
      viewBox={viewBoxAttr}
      preserveAspectRatio={preserveAspectRatioAttr}
    >
      <use href={sprite + `#${icon}`} />
    </StyledSvg>
  ) : (
    <StyledSvg $icon={icon}>
      <use href={sprite + `#${icon}`} />
    </StyledSvg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  hero: PropTypes.string,
};
