import { LogoIcon } from "./Logo.styled";
import PropTypes from "prop-types";
export const Logo = ({ variant }) => {
	return <LogoIcon icon="logo" variant={variant || "header"} />;
};

Logo.propTypes = {
	variant: PropTypes.string,
};
