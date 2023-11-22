import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { baseIconMotion } from "../../common/animations";
import { Icon } from "..";
import { StyledButton } from "./MobileMenuButton.styled";

export function MobileMenuButton({ onClick, variant }) {
  const location = useLocation().pathname;
  return (
    <StyledButton type="button" onClick={onClick} aria-label="mobile menu" $location={location}>
      <Icon icon={variant === "close" ? "x" : "hamburger"} {...baseIconMotion} />
    </StyledButton>
  );
}

MobileMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

export default MobileMenuButton;
