import { NavLink } from "react-router-dom";
import { StyledNav } from "./NavigationFooter.styled";

export function NavigationFooter() {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="#">Ingredients </NavLink>
        </li>
        <li>
          <NavLink to="#">Add recipes </NavLink>
        </li>
        <li>
          <NavLink to="#">My recipes </NavLink>
        </li>
        <li>
          <NavLink to="#">Favorite </NavLink>
        </li>
        <li>
          <NavLink to="#">Shopping list </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default NavigationFooter;
