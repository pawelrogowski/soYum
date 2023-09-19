import { StyledHeader } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import avatar from "../../assets/images/avatar.jpg";
import avatarPlaceholder from "../../assets/images/avatar-placeholder.png";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { MobileMenu } from "../Menu/MobileMenu";
import { Navigation } from "../Navigation/Navigation";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../styles/themes";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";
export const Header = () => {
  const isAtLeastDesktopSize = useMediaQuery({ minWidth: breakpoints.desktop });

  return (
    <StyledHeader>
      <Link to="/home">
        <Logo variant="header" />
      </Link>
      {isAtLeastDesktopSize && <Navigation />}
      <UserAvatar
        image={avatar}
        placeholder={avatarPlaceholder}
        name="Feironnnnnnnnnnnn"
      />
      {isAtLeastDesktopSize && <ThemeSwitch />}
      {!isAtLeastDesktopSize && <MobileMenu />}
    </StyledHeader>
  );
};

export default Header;
