import sprite from "../../assets/icons/sprite.svg";
import PropTypes from "prop-types";
import styled from "styled-components";

const IconBase = ({ icon, className }) => {
	return (
		<svg className={className}>
			<use href={sprite + `#${icon}`} />
		</svg>
	);
};

export const Icon = styled(IconBase)``;

IconBase.propTypes = {
	icon: PropTypes.string.isRequired,
	className: PropTypes.string,
};
