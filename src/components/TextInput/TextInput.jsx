import { StyledDiv } from "./TextInput.styled";
import { Icon } from "../Icon/Icon";
import PropTypes from "prop-types";

export const TextInput = ({ iconLeft, iconRight, placeholder }) => {
	return (
		<StyledDiv>
			{iconLeft && <Icon icon={iconLeft} />}
			<input placeholder={placeholder} type="text" />
			{iconRight && <Icon icon={iconRight} />}
		</StyledDiv>
	);
};

TextInput.propTypes = {
	iconLeft: PropTypes.string,
	iconRight: PropTypes.string,
	placeholder: PropTypes.string,
};
