import { NavLink } from "react-router-dom";
import { StyledNav } from "./NavigationDesktop.styled";
import { Icon } from "../Icon/Icon";

export const NavigationDesktop = () => {
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
          <button type="button" aria-label="Search">
            <Icon icon="search" />
          </button>
        </li>
      </ul>
    </StyledNav>
  );
};
