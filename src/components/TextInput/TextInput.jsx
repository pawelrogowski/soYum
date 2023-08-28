import { StyledInput } from "./TextInput.styled";
import { Icon } from "../Icon/Icon";
import PropTypes from "prop-types";

export const TextInput = ({ iconLeft, iconRight, placeholder }) => {
	return (
		<>
			<StyledInput placeholder={placeholder} type="text" />
			{iconLeft && <Icon icon={iconLeft} />}
			{iconRight && <Icon icon={iconRight} />}
		</>
	);
};

TextInput.propTypes = {
	iconLeft: PropTypes.string,
	iconRight: PropTypes.string,
	placeholder: PropTypes.string,
};
