import { NavLink } from "react-router-dom";

import { useButtonScroll } from "../../hooks/useButtonScroll";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { Icon } from "../Icon/Icon";
import { StyledNav } from "./CategoryFilter.styled";

export const CategoryFilter = () => {
  const scrollRef = useHorizontalScroll();
  const { scrollLeft, scrollRight, isAtLeft, isAtRight } =
    useButtonScroll(scrollRef);
  const scrollBy = 200;

  return (
    <StyledNav>
      <button
        type="button"
        aria-label="scroll left"
        onClick={() => scrollLeft(scrollBy)}
        disabled={isAtLeft}
      >
        <Icon icon="arrow_slim" />
      </button>
      <ul ref={scrollRef}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link-extreme" : ""
            }
            to="beef"
          >
            Beef
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="breakfast"
          >
            Breakfast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="chicken"
          >
            Chicken
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="desserts"
          >
            Desserts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="goat"
          >
            Goat
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="lamb"
          >
            Lamb
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="miscellaneous"
          >
            Miscellaneous
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="pasta"
          >
            Pasta
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="seafood"
          >
            Seafood
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="side"
          >
            Side
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="starter"
          >
            Starter
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="vegan"
          >
            Vegan
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link-extreme" : ""
            }
            to="pork"
          >
            Pork
          </NavLink>
        </li>
      </ul>

      <button
        type="button"
        aria-label="scroll right"
        onClick={() => scrollRight(scrollBy)}
        disabled={isAtRight}
      >
        <Icon icon="arrow_slim" />
      </button>
    </StyledNav>
  );
};
