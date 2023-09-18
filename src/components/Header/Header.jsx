import { StyledHeader } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import avatar from "../../assets/images/avatar.jpg";
import avatarPlaceholder from "../../assets/images/avatar-placeholder.png";
import { Avatar } from "../Avatar/Avatar";
import { MobileMenu } from "../Menu/MobileMenu";
import { Navigation } from "../Navigation/Navigation";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../styles/themes";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
export const Header = () => {
  const isAtLeastTabletSize = useMediaQuery({ minWidth: breakpoints.tablet });
  const isAtLeastDesktopSize = useMediaQuery({ minWidth: breakpoints.desktop });

  return (
    <StyledHeader>
      <Logo variant="header" />
      {isAtLeastDesktopSize && <Navigation />}
      <Avatar image={avatar} placeholder={avatarPlaceholder} name="No Data" />
      {isAtLeastDesktopSize && <ThemeSwitch />}
      {!isAtLeastTabletSize && <MobileMenu />}
    </StyledHeader>
  );
};

export default Header;
