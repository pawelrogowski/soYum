import { NavLink } from "react-router-dom";
import { StyledNav } from "./Navigation.styled";
import { Icon } from "../Icon/Icon";
import PropTypes from "prop-types";

export const Navigation = ({ variant }) => {
  return (
    <StyledNav $variant={variant}>
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
        {variant !== "footer" && (
          <li>
            <NavLink to="#">
              <Icon icon="search" />
              {variant !== "header" && <span>Search</span>}
            </NavLink>
          </li>
        )}
      </ul>
    </StyledNav>
  );
};

Navigation.propTypes = {
  variant: PropTypes.string.isRequired,
};
