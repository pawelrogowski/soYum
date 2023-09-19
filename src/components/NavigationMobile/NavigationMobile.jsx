import { NavLink } from "react-router-dom";
import { StyledNav } from "./NavigationMobile.styled";
import { Icon } from "../Icon/Icon";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";

export const NavigationMobile = () => {
  return (
    <StyledNav>
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
          <button type="button">
            <Icon icon="search" />
          </button>
        </li>
      </ul>
      <ThemeSwitch />
    </StyledNav>
  );
};
