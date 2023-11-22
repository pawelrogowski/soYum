import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";

import avatar from "../../assets/images/avatar.avif";
import avatarPlaceholder from "../../assets/images/avatar.avif";
import useShowDecorations from "../../hooks/useShowDecorations";
import { setIsMobileMenuOpen } from "../../redux/slices/modalSlice";
import { breakpoints } from "../../styles/themes";
import { Logo } from "../Logo/Logo";
import { MobileMenuButton } from "../MobileMenuButton/MobileMenuButton";
import { NavigationDesktop } from "../NavigationDesktop/NavigationDesktop";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { StyledHeader } from "./Header.styled";

export const Header = () => {
  const shouldUseDecor = useShowDecorations();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isMobileMenuOpen = useSelector((state) => state.modal.isMobileMenuOpen);
  const isAtLeastDesktopSize = useMediaQuery({ minWidth: breakpoints.desktop });

  const isRecipePage = pathname.startsWith("/recipe");
  const fixed = isRecipePage;
  const altFontColors = isRecipePage;
  const handleMenuToggle = () => {
    dispatch(setIsMobileMenuOpen(!isMobileMenuOpen));
  };
  const handleCloseMenu = () => {
    isMobileMenuOpen && dispatch(setIsMobileMenuOpen(false));
  };

  return (
    <StyledHeader $addDecor={shouldUseDecor} $altFontColors={altFontColors} $fixed={fixed}>
      <Link to="/home" aria-label="navigate to homepage">
        <Logo variant="header" onClick={handleCloseMenu} />
      </Link>
      {isAtLeastDesktopSize && <NavigationDesktop />}
      <UserAvatar image={avatar} placeholder={avatarPlaceholder} name="User Name" />
      {isAtLeastDesktopSize && <ThemeSwitch />}

      {!isAtLeastDesktopSize && <MobileMenuButton onClick={handleMenuToggle} variant="open" />}
    </StyledHeader>
  );
};

export default Header;
