import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { StyledButton } from "./MobileMenuButton.styled";

export function MobileMenuButton({ onClick, variant }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      <Icon icon={variant === "close" ? "x" : "hamburger"} />
    </StyledButton>
  );
}

MobileMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};
