import sprite from "../../assets/icons/sprite.svg";
import PropTypes from "prop-types";
import { StyledSvg } from "./Icon.styled";

export const Icon = ({ icon, className }) => {
	return (
		<StyledSvg className={className} icon={icon}>
			<use href={sprite + `#${icon}`} />
		</StyledSvg>
	);
};

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	className: PropTypes.string,
};
