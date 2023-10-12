import { NavLink } from "react-router-dom";

import { StyledNav } from "./NavigationFooter.styled";

export function NavigationFooter() {
  const navItems = [
    { path: "/ingredients", text: "Ingredients" },
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
              className={({ isActive }) =>
                isActive ? "active-nav-link-footer" : ""
              }
              to={item.path}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
}

export default NavigationFooter;
