import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import avatar from "../../assets/images/avatar.webp";
import avatarPlaceholder from "../../assets/images/avatar-placeholder.png";
import { toggleIsMobileMenuOpen } from "../../redux/slices/modalSlice";
import { breakpoints } from "../../styles/themes";
import { Logo } from "../Logo/Logo";
import { MobileMenuButton } from "../MobileMenuButton/MobileMenuButton";
import { NavigationDesktop } from "../NavigationDesktop/NavigationDesktop";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { StyledHeader } from "./Header.styled";

export const Header = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.modal.isMobileMenuOpen);
  const isAtLeastDesktopSize = useMediaQuery({ minWidth: breakpoints.desktop });

  const handleMenuToggle = () => {
    dispatch(toggleIsMobileMenuOpen(!isMobileMenuOpen));
  };
  const handleCloseMenu = () => {
    isMobileMenuOpen && dispatch(toggleIsMobileMenuOpen(false));
  };

  return (
    <StyledHeader>
      <Link to="/home" aria-label="navigate to homepage">
        <Logo variant="header" onClick={handleCloseMenu} />
      </Link>
      {isAtLeastDesktopSize && <NavigationDesktop />}
      <UserAvatar image={avatar} placeholder={avatarPlaceholder} name="Feironnnnnnnnnnnn" />
      {isAtLeastDesktopSize && <ThemeSwitch />}

      {!isAtLeastDesktopSize && <MobileMenuButton onClick={handleMenuToggle} variant="open" />}
    </StyledHeader>
  );
};

export default Header;
