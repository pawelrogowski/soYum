import { NavLink } from "react-router-dom";

import { Icon } from "..";
import { StyledNav } from "./NavigationDesktop.styled";

export const NavigationDesktop = () => {
  const navItems = [
    { path: "/categories/beef", text: "Categories" },
    { path: "/add", text: "Add recipes" },
    { path: "/myrecipes", text: "My recipes" },
    { path: "/favorites", text: "Favorites" },
    { path: "/shoppinglist", text: "Shopping List" },
  ];

  return (
    <StyledNav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? "active-nav-link" : "")}
              to={item.path}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/search" className={({ isActive }) => (isActive ? "active-nav-link" : "")}>
            <Icon icon="search" aria-label="search" />
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavigationDesktop;
