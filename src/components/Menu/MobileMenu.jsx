import { Icon } from "../Icon/Icon";
import { StyledButton } from "./Menu.styled";

export function MobileMenu() {
  return (
    <StyledButton type="button">
      <Icon icon="hamburger" />
    </StyledButton>
  );
}
