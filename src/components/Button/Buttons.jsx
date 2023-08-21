import { StyledButton } from "./Buttons.styled";
import PropTypes from "prop-types";

export const Button = ({ $variant }) => {
	return <StyledButton $variant={$variant}>Button</StyledButton>;
};

Button.propTypes = {
	$variant: PropTypes.string,
};
