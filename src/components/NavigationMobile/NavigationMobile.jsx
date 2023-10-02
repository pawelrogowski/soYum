import { NavLink } from "react-router-dom";
import { StyledAside } from "./NavigationMobile.styled";
import { Icon } from "../Icon/Icon";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { MobileMenuButton } from "../MobileMenuButton/MobileMenuButton";
import { useDispatch } from "react-redux";
import { toggleMobileMenu } from "../../redux/slices/modalSlice";
const navSlideMotion = {
  initial: { left: "-100%", opacity: 0 },
  animate: { left: 0, opacity: 1 },
  exit: { left: "-100%", transition: { duration: 0.2 } },
  transition: { duration: 0.3 },
};

export const NavigationMobile = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <StyledAside {...navSlideMotion}>
      <div>
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
              <span>Search</span>
            </button>
          </li>
        </ul>
        <ThemeSwitch />
      </div>
    </StyledAside>
  );
};
