import { useState } from "react";
import Select from "react-select";

import { StyledDiv } from "./MeasureSelect.styled";

const options = [
  { value: "tbs", label: "tbs" },
  { value: "tsp", label: "tsp" },
  { value: "kg", label: "kg" },
  { value: "g", label: "g" },
  { value: "cup", label: "cup" },
  { value: "oz", label: "oz" },
  { value: "lb", label: "lb" },
  { value: "ml", label: "ml" },
  { value: "l", label: "l" },
];

export const MeasureSelect = () => {
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleInputChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <StyledDiv>
      <input
        name="amount"
        type="number"
        value={amount}
        onChange={handleInputChange}
        aria-label="amount"
        placeholder="1"
      />
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="tsp"
        unstyled
        classNamePrefix="Select"
      />
    </StyledDiv>
  );
};
