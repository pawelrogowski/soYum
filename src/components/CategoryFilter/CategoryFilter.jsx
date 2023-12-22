import { NavLink, useLocation } from "react-router-dom";

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
    "Breakfast",
    "Brunch",
    "Lunch",
    "Dinner",
    "Snack",
    "Beef",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Pork",
    "Vegetarian",
    "Gluten-Free",
    "Dairy-Free",
    "Nut-Free",
    "Egg-Free",
    "Soy-Free",
    "Fish",
    "Shellfish",
    "Salad",
    "Soup",
    "Beverage",
    "Appetizer",
    "Bread",
    "Cake",
    "Cookie",
    "Pie",
    "Poultry",
    "Pizza",
    "Sandwich",
    "Sauce",
    "Tofu",
    "Turkey",
    "Burger",
    "Cheese",
    "Chocolate",
    "Coffee",
    "Tea",
    "Fruit",
    "Grains",
    "Rice",
    "Potato",
    "Vegetable",
    "Mushroom",
    "Noodles",
    "Pancake",
    "Quiche",
    "Ribs",
    "Sausage",
    "Smoothie",
    "Stew",
    "Taco",
    "Wrap",
    "Asian",
    "Italian",
    "Mexican",
    "French",
    "Indian",
    "Chinese",
    "Japanese",
    "Korean",
    "Thai",
    "Vietnamese",
    "Mediterranean",
    "Greek",
    "Spanish",
    "German",
    "Moroccan",
    "American",
    "Southern",
    "Cajun",
    "English",
    "Irish",
    "Jewish",
    "Middle Eastern",
    "BBQ",
    "Grilling",
    "Roasting",
    "Baking",
    "Frying",
    "Slow Cooker",
    "Microwave",
    "No-Cook",
    "Pickling",
    "Pressure Cooker",
    "Stir-Fry",
    "Kid-Friendly",
    "Quick & Easy",
    "Make Ahead",
    "Picnic",
    "Potluck",
    "Camping",
    "Tailgating",
    "Birthday",
    "Christmas",
    "Thanksgiving",
    "New Year",
    "Super Bowl",
    "Easter",
    "Halloween",
    "Hanukkah",
    "Passover",
    "Ramadan",
    "Valentine's Day",
  ];

  const location = useLocation();
  const currentCategory = new URLSearchParams(location.search).get("category");

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
              className={
                category.toLowerCase() === currentCategory
                  ? index === 0 || index === categories.length - 1
                    ? "active-link-extreme"
                    : "active-link"
                  : ""
              }
              to={`/categories?category=${category.toLowerCase()}`}
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

export default CategoryFilter;
