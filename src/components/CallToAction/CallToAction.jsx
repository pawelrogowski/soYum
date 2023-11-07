import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { baseIconMotion } from "../../common/animations";
import { breakpoints } from "../../styles/themes";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./CallToAction.styled";
export const CallToAction = ({ text, highlightedText, linkText, icon }) => {
  const isAtLeastTablet = useMediaQuery({ minWidth: breakpoints.tablet });
  return (
    <StyledDiv>
      <p>
        <span>{highlightedText} </span>
        {text}
      </p>
      <Link to="#">
        <span>{linkText}</span>
        <Icon icon={icon} {...baseIconMotion} />
      </Link>
      {isAtLeastTablet && <Icon icon="squiggly_arrow" />}
    </StyledDiv>
  );
};

CallToAction.propTypes = {
  text: PropTypes.string.isRequired,
  highlightedText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
