import { NavLink } from "react-router-dom";
import { StyledNav } from "./NavigationMobile.styled";
import { Icon } from "../Icon/Icon";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { MobileMenuButton } from "../MobileMenuButton/MobileMenuButton";
import { useDispatch } from "react-redux";
import { toggleMobileMenu } from "../../redux/slices/globalSlice";

const navSlideMotion = {
  initial: { right: "-100%", opacity: 0 },
  animate: { right: 0, opacity: 1 },
  exit: { left: "-200%", opacity: 0, transition: { duration: 0.3 } },
  transition: { type: "circ", duration: 0.3 },
};

export const NavigationMobile = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <StyledNav {...navSlideMotion}>
      <MobileMenuButton onClick={handleMenuToggle} variant="close" />
      <ul>
        <li>
          <NavLink to="#">Categories</NavLink>
        </li>
        <li>
          <NavLink to="#">Add recipes</NavLink>
        </li>
        <li>
          <NavLink to="#">My Recipes</NavLink>
        </li>
        <li>
          <NavLink to="#">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="#">Shopping List</NavLink>
        </li>
        <li>
          <button type="button" aria-label="Search">
            <Icon icon="search" />
          </button>
        </li>
      </ul>
      <ThemeSwitch />
    </StyledNav>
  );
};
