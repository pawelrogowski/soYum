import sprite from "../../assets/icons/sprite.svg";
import PropTypes from "prop-types";
import { StyledSvg } from "./Icon.styled";

export const Icon = ({ variant, className }) => {
	return (
		<StyledSvg className={className} variant={variant}>
			<use href={sprite + `#${variant}`} />
		</StyledSvg>
	);
};

Icon.propTypes = {
	variant: PropTypes.string.isRequired,
	className: PropTypes.string,
};
