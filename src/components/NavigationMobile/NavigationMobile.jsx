import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { mobileMenuMotion } from "../../common/animations";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import { setIsMobileMenuOpen } from "../../redux/slices/modalSlice";
import { Icon, MobileMenuButton, ThemeSwitch } from "..";
import { StyledAside } from "./NavigationMobile.styled";

export const NavigationMobile = () => {
  useDisableBodyScroll();

  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(setIsMobileMenuOpen());
  };

  const navItems = [
    { path: "/categories/beef", text: "Categories" },
    { path: "/add", text: "Add recipes" },
    { path: "/myrecipes", text: "My recipes" },
    { path: "/favorites", text: "Favorites" },
    { path: "/shoppinglist", text: "Shopping List" },
  ];

  return (
    <StyledAside {...mobileMenuMotion}>
      <div>
        <MobileMenuButton onClick={handleMenuToggle} variant="close" />
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav-link-mobile" : "")}
                to={item.path}
                onClick={handleMenuToggle}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? "active-nav-link-mobile" : "")}
            onClick={handleMenuToggle}
          >
            <li>
              <button type="button" aria-label="Search">
                <Icon icon="search" />
                <span>Search</span>
              </button>
            </li>
          </NavLink>
        </ul>
        <ThemeSwitch />
      </div>
    </StyledAside>
  );
};

export default NavigationMobile;
