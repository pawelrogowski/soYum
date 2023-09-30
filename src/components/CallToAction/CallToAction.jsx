import { StyledDiv } from "./CallToAction.styled";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";

export const CallToAction = ({ text, highlightedText, linkText, icon }) => {
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
    </StyledDiv>
  );
};

CallToAction.propTypes = {
  text: PropTypes.string.isRequired,
  highlightedText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
