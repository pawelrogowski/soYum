import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { setRecipeCookingTime } from "../../redux/slices/addRecipeFormSlice";
import { StyledDiv } from "./TimeSelect.styled.js";

const options = Array.from({ length: 240 / 5 }, (_, i) => {
  const value = (i + 1) * 5;
  return { value: value.toString(), label: `${value} min` };
});

export const TimeSelect = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { recipeCookingTime } = useSelector((state) => state.addRecipeForm);

  const handleChange = (selectedOption) => {
    dispatch(setRecipeCookingTime(selectedOption.value));
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <StyledDiv onClick={handleClick}>
      <span className={recipeCookingTime ? "no-placeholder" : ""}>
        {recipeCookingTime ? `Cooking Time: ${recipeCookingTime} min` : "Cooking Time"}
      </span>
      <Select
        ref={ref}
        openMenuOnFocus
        unstyled
        classNamePrefix="Select"
        options={options}
        onChange={handleChange}
        placeholder="5 min"
        escapeClearsValue
      />
    </StyledDiv>
  );
};
