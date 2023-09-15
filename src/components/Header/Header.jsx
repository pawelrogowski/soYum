import { StyledHeader } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import { Icon } from "../Icon/Icon";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo variant="header" />
      <div>
        <picture></picture>
        <span>Name</span>
      </div>
      <button type="button">
        <Icon icon="hamburger" />
      </button>
    </StyledHeader>
  );
};

export default Header;
