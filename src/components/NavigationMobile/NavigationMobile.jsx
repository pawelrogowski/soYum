import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { toggleIsMobileMenuOpen } from "../../redux/slices/modalSlice";
import { Icon } from "../Icon/Icon";
import { MobileMenuButton } from "../MobileMenuButton/MobileMenuButton";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { StyledAside } from "./NavigationMobile.styled";

const navSlideMotion = {
  initial: { left: "-100%", opacity: 0 },
  animate: { left: 0, opacity: 1 },
  exit: { left: "-100%", transition: { duration: 0.2 } },
  transition: { duration: 0.3 },
};

export const NavigationMobile = () => {
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleIsMobileMenuOpen());
  };

  const navItems = [
    { path: "/categories", text: "Categories" },
    { path: "/add", text: "Add recipes" },
    { path: "/myrecipes", text: "My recipes" },
    { path: "/favorites", text: "Favorites" },
    { path: "/shoppinglist", text: "Shopping List" },
  ];

  return (
    <StyledAside {...navSlideMotion}>
      <div>
        <MobileMenuButton onClick={handleMenuToggle} variant="close" />
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link-mobile" : ""
                }
                to={item.path}
                onClick={handleMenuToggle}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
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
