import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { StyledButton } from "./MobileMenuButton.styled";
import { useSelector } from "react-redux";

export function MobileMenuButton({ onClick }) {
  const isMobileMenuOpen = useSelector(
    (state) => state.global.isMobileMenuOpen
  );

  return (
    <StyledButton type="button" onClick={onClick}>
      <Icon icon={!isMobileMenuOpen ? "hamburger" : "x"} />
    </StyledButton>
  );
}

MobileMenuButton.propTypes = {
  onClick: PropTypes.func,
};
