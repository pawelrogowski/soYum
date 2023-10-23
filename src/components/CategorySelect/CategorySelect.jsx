import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { setRecipeCategories } from "../../redux/slices/addRecipeFormSlice";
import { StyledDiv } from "./CategorySelect.styled";

const options = [
  { value: "beef", label: "Beef" },
  { value: "breakfast", label: "Breakfast" },
  { value: "chicken", label: "Chicken" },
  { value: "desserts", label: "Desserts" },
  { value: "goat", label: "Goat" },
  { value: "lamb", label: "Lamb" },
  { value: "miscellaneous", label: "Miscellaneous" },
  { value: "pasta", label: "Pasta" },
  { value: "seafood", label: "Seafood" },
  { value: "side", label: "Side" },
  { value: "starter", label: "Starter" },
  { value: "vegan", label: "Vegan" },
  { value: "pork", label: "Pork" },
  { value: "vegetarian", label: "Vegetarian" },
];
export const CategorySelect = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { recipeCategories } = useSelector((state) => state.addRecipeForm);

  const handleChange = (selectedOptions) => {
    dispatch(setRecipeCategories(selectedOptions.map((option) => option.value)));
  };

  const handleWrapperClick = () => ref.current.focus();

  useEffect(() => {
    console.log(recipeCategories);
  }, [recipeCategories]);

  return (
    <StyledDiv onClick={handleWrapperClick}>
      <Select
        ref={ref}
        openMenuOnFocus
        isMulti
        unstyled
        classNamePrefix="Select"
        options={options}
        onChange={handleChange}
        placeholder="Categories"
      />
    </StyledDiv>
  );
};
