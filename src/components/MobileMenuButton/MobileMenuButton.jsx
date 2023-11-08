import PropTypes from "prop-types";

import { baseIconMotion } from "../../common/animations";
import { Icon } from "../Icon/Icon";
import { StyledButton } from "./MobileMenuButton.styled";

export function MobileMenuButton({ onClick, variant }) {
  const useAlternativeColors = !window.location.href.includes("/home");
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      aria-label="mobile menu"
      $useAltColors={useAlternativeColors}
    >
      <Icon icon={variant === "close" ? "x" : "hamburger"} {...baseIconMotion} />
    </StyledButton>
  );
}

MobileMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};
