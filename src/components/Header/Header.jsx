import { StyledHeader } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import avatar from "../../assets/images/avatar.webp";
import avatarPlaceholder from "../../assets/images/avatar-placeholder.png";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { MobileMenuButton } from "../MobileMenuButton/MobileMenuButton";
import { NavigationDesktop } from "../NavigationDesktop/NavigationDesktop";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../styles/themes";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileMenu } from "../../redux/slices/modalSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.modal.isMobileMenuOpen);
  const isAtLeastDesktopSize = useMediaQuery({ minWidth: breakpoints.desktop });

  const handleMenuToggle = () => {
    dispatch(toggleMobileMenu(!isMobileMenuOpen));
  };

  return (
    <StyledHeader>
      <Link to="/home" aria-label="navigate to homepage">
        <Logo variant="header" />
      </Link>
      {isAtLeastDesktopSize && <NavigationDesktop />}
      <UserAvatar
        image={avatar}
        placeholder={avatarPlaceholder}
        name="Feironnnnnnnnnnnn"
      />
      {isAtLeastDesktopSize && <ThemeSwitch />}

      {!isAtLeastDesktopSize && (
        <MobileMenuButton onClick={handleMenuToggle} variant="open" />
      )}
    </StyledHeader>
  );
};

export default Header;
