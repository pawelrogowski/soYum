import icons from "../../assets/icons/sprite.svg";
import PropTypes from "prop-types";

export const Icon = ({ icon }) => {
	return (
		<svg>
			<use href={icons + `#${icon}`} />
		</svg>
	);
};

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
};
