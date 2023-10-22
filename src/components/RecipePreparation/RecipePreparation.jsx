import PropTypes from "prop-types";
import { useState } from "react";

import { Heading } from "../Heading/Heading";
import { StyledDiv } from "./RecipePreparation.styled";

export const RecipePreparation = ({ className }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    let newValue = value;

    if (newValue === "") {
      setInputValue("");
      return;
    }

    if (!newValue.startsWith("• ")) {
      newValue = "• " + newValue;
    }

    setInputValue(newValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const { selectionStart, selectionEnd, value } = event.target;
      const newValue = value.substring(0, selectionStart) + "\n• " + value.substring(selectionEnd);
      setInputValue(newValue);
    }
  };

  return (
    <StyledDiv className={className}>
      <Heading as="h2">Recipe Preparation</Heading>
      <textarea
        placeholder="• Enter preparation steps"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </StyledDiv>
  );
};

RecipePreparation.propTypes = {
  className: PropTypes.string,
};
