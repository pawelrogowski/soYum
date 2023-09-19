import { StyledHeader } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import avatar from "../../assets/images/avatar.jpg";
import avatarPlaceholder from "../../assets/images/avatar-placeholder.png";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { MobileMenuButton } from "../MobileMenuButton/MobileMenuButton";
import { NavigationDesktop } from "../NavigationDesktop/NavigationDesktop";

import { NavigationMobile } from "../NavigationMobile/NavigationMobile";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../styles/themes";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileMenu } from "../../redux/slices/globalSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector(
    (state) => state.global.isMobileMenuOpen
  );
  const isAtLeastDesktopSize = useMediaQuery({ minWidth: breakpoints.desktop });

  const handleMenuToggle = () => {
    dispatch(toggleMobileMenu(!isMobileMenuOpen));
  };

  return (
    <StyledHeader>
      {isMobileMenuOpen && !isAtLeastDesktopSize && <NavigationMobile />}
      <Link to="/home">
        <Logo variant="header" />
      </Link>
      {isAtLeastDesktopSize && <NavigationDesktop />}
      <UserAvatar
        image={avatar}
        placeholder={avatarPlaceholder}
        name="Feironnnnnnnnnnnn"
      />
      {isAtLeastDesktopSize && <ThemeSwitch />}
      {!isAtLeastDesktopSize && <MobileMenuButton onClick={handleMenuToggle} />}
    </StyledHeader>
  );
};

export default Header;
