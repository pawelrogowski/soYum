import { StyledNav } from "./CategoryFilter.styled";
import { NavLink } from "react-router-dom";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { useButtonScroll } from "../../hooks/useButtonScroll";
import { Icon } from "../Icon/Icon";

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
