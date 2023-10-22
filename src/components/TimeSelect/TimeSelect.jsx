import { useEffect, useRef, useState } from "react";
import Select from "react-select";

import { StyledDiv } from "./TimeSelect.styled.js";

const options = Array.from({ length: 240 / 5 }, (_, i) => {
  const value = (i + 1) * 5;
  return { value: value.toString(), label: `${value} min` };
});

export const TimeSelect = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const ref = useRef(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <StyledDiv onClick={handleClick}>
      <span className={selectedOption.value ? "no-placeholder" : ""}>
        {selectedOption.value ? `Cooking Time: ${selectedOption.value} min` : "Cooking Time"}
      </span>
      <Select
        ref={ref}
        openMenuOnFocus
        unstyled
        classNamePrefix="Select"
        options={options}
        onChange={handleChange}
        placeholder="5 min"
      />
    </StyledDiv>
  );
};
