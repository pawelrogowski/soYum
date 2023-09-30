import { StyledDiv } from "./CallToAction.styled";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../styles/themes";
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
        <Icon icon={icon} />
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
