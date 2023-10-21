import { useState } from "react";

import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./Counter.styled";

export const Counter = () => {
  const [counterValue, setCounterValue] = useState(1);

  const handleIncrement = () => {
    if (counterValue < 51) {
      setCounterValue((prevState) => prevState + 1);
    }
  };
  const handleDecrement = () => {
    if (counterValue > 1) {
      setCounterValue((prevState) => prevState - 1);
    }
  };

  return (
    <StyledDiv>
      <button
        type="button"
        aria-label="remove last ingredient"
        onClick={handleDecrement}
        disabled={counterValue === 1}
      >
        <Icon icon="minus" />
      </button>

      <span>{counterValue}</span>

      <button
        type="button"
        aria-label="add new ingredient"
        onClick={handleIncrement}
        disabled={counterValue > 49}
      >
        <Icon icon="plus" />
      </button>
    </StyledDiv>
  );
};
