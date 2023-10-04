import { StyledNav } from "./CategoryFilter.styled";
import { NavLink } from "react-router-dom";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";

export const CategoryFilter = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <StyledNav ref={scrollRef}>
      <ul>
        <li>
          <NavLink to="#">Beef</NavLink>
        </li>
        <li>
          <NavLink to="#">Breakfast</NavLink>
        </li>
        <li>
          <NavLink to="#">Chicken</NavLink>
        </li>
        <li>
          <NavLink to="#">Desserts</NavLink>
        </li>
        <li>
          <NavLink to="#">Goat</NavLink>
        </li>
        <li>
          <NavLink to="#">Lamb</NavLink>
        </li>
        <li>
          <NavLink to="#">Miscellaneous</NavLink>
        </li>
        <li>
          <NavLink to="#">Pasta</NavLink>
        </li>
        <li>
          <NavLink to="#">Seafood</NavLink>
        </li>
        <li>
          <NavLink to="#">Side</NavLink>
        </li>
        <li>
          <NavLink to="#">Starter</NavLink>
        </li>
        <li>
          <NavLink to="#">Vegan</NavLink>
        </li>
        <li>
          <NavLink to="#">Pork</NavLink>
        </li>
        <li>
          <NavLink to="#">Pork</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};
