import { NavLink } from "react-router-dom";

import { baseIconMotion } from "../../common/animations";
import { useButtonScroll } from "../../hooks/useButtonScroll";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { Icon } from "../Icon/Icon";
import { StyledNav } from "./CategoryFilter.styled";

export const CategoryFilter = () => {
  const scrollRef = useHorizontalScroll();
  const { scrollLeft, scrollRight, isAtLeft, isAtRight } = useButtonScroll(scrollRef);
  const scrollBy = 200;

  const categories = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Desserts",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Pork",
  ];

  return (
    <StyledNav>
      <button
        type="button"
        aria-label="scroll left"
        onClick={() => scrollLeft(scrollBy)}
        disabled={isAtLeft}
      >
        <Icon icon="arrow_slim" {...baseIconMotion} />
      </button>
      <ul ref={scrollRef}>
        {categories.map((category, index) => (
          <li key={category}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? index === 0 || index === categories.length - 1
                    ? "active-link-extreme"
                    : "active-link"
                  : ""
              }
              to={category.toLowerCase()}
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="scroll right"
        onClick={() => scrollRight(scrollBy)}
        disabled={isAtRight}
      >
        <Icon icon="arrow_slim" {...baseIconMotion} />
      </button>
    </StyledNav>
  );
};
