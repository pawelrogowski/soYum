import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({ variant, children }) => {
	return <StyledButton $variant={variant}>{children}</StyledButton>;
};

Button.propTypes = {
	variant: PropTypes.string,
	children: PropTypes.node,
};
