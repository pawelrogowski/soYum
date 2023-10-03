import { NavLink } from "react-router-dom";
import { StyledNav } from "./NavigationDesktop.styled";
import { Icon } from "../Icon/Icon";

export const NavigationDesktop = () => {
  const navItems = [
    { path: "/categories", text: "Categories" },
    { path: "/recipes", text: "Add recipes" },
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
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to={item.path}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        <li>
          <button type="button" aria-label="Search">
            <Icon icon="search" />
          </button>
        </li>
      </ul>
    </StyledNav>
  );
};
