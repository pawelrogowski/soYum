import sprite from "../../assets/icons/sprite.svg";
import PropTypes from "prop-types";
import { StyledSvg } from "./Icon.styled";
import { AnimatePresence } from "framer-motion";

export const Icon = ({ icon, hero = false, ...props }) => {
  let viewBoxAttr = "";
  let preserveAspectRatioAttr = "";

  if (hero) {
    viewBoxAttr = "0 0 456 388";
    preserveAspectRatioAttr = "xMidYMax meet";
  }

  return hero ? (
    <AnimatePresence>
      <StyledSvg
        $icon={icon}
        {...props}
        viewBox={viewBoxAttr}
        preserveAspectRatio={preserveAspectRatioAttr}
      >
        <use href={sprite + `#${icon}`} />
      </StyledSvg>
    </AnimatePresence>
  ) : (
    <AnimatePresence>
      <StyledSvg $icon={icon} {...props}>
        <use href={sprite + `#${icon}`} />
      </StyledSvg>
    </AnimatePresence>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  hero: PropTypes.string,
};
