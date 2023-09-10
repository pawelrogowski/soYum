import sprite from "../../assets/icons/sprite.svg";
import heroSprite from "../../assets/icons/heroSprite.svg";
import PropTypes from "prop-types";
import { StyledSvg } from "./Icon.styled";

export const Icon = ({ icon, hero = false }) => {
  let path;
  let viewBoxAttr = "";
  let preserveAspectRatioAttr = "";

  !hero ? (path = sprite) : (path = heroSprite);

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
      <use href={path + `#${icon}`} />
    </StyledSvg>
  ) : (
    <StyledSvg $icon={icon}>
      <use href={path + `#${icon}`} />
    </StyledSvg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  hero: PropTypes.string,
};
