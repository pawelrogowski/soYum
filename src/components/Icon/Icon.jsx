import sprite from "../../assets/icons/sprite.svg";
import PropTypes from "prop-types";
import { StyledSvg } from "./Icon.styled";
import { AnimatePresence } from "framer-motion";

/**
 * Icon Component
 *
 * This Component is responsible for rendering icons. This also handles animation as well as differentiating
 * normal icons and hero icons.
 *
 * @param {Object} props - The properties that define the icon.
 * @param {string} props.icon - The name of the icon to render based on the `sprite` file.
 * @param {boolean} [props.hero=false] - A flag that indicates if the icon is a hero icon; hero icons have special
 *                                        viewbox and aspect ratio settings.
 * @param {Object} [props.props] - Other optional properties that should be passed to the StyledSvg component.
 *
 * When `hero` is true the component sets `viewBoxAttr` to "0 0 456 388" and `preserveAspectRatioAttr` to "xMidYMax meet"
 * else `viewBoxAttr` and `preserveAspectRatioAttr` are empty strings.
 *
 * @returns {JSX.Element} - A jsx element consisting of Animated Svg icons.
 *
 * @example
 * <Icon icon="home" />
 * <Icon icon="user" hero />
 */
export const Icon = ({ icon, hero = false, ...props }) => {
  let viewBoxAttr = "";
  let preserveAspectRatioAttr = "";

  if (hero) {
    viewBoxAttr = "0 0 456 388";
    preserveAspectRatioAttr = "xMidYMax meet";
  }

  return (
    <AnimatePresence>
      {hero ? (
        <StyledSvg
          $icon={icon}
          {...props}
          viewBox={viewBoxAttr}
          preserveAspectRatio={preserveAspectRatioAttr}
        >
          <use href={sprite + `#${icon}`} />
        </StyledSvg>
      ) : (
        <StyledSvg $icon={icon} {...props}>
          <use href={sprite + `#${icon}`} />
        </StyledSvg>
      )}
    </AnimatePresence>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  hero: PropTypes.bool,
};
