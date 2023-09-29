import { StyledDiv } from "./CallToAction.styled";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";

export const CallToAction = ({ text, highlightedText, linkText, icon }) => {
  return (
    <StyledDiv>
      <p>
        <span>{highlightedText} </span>
        {text}
      </p>
      <a>
        <span>{linkText}</span>
        <Icon icon={icon} />
      </a>
    </StyledDiv>
  );
};

CallToAction.propTypes = {
  text: PropTypes.string.isRequired,
  highlightedText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
