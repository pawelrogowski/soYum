import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  addPreparationStep,
  editPreparationStep,
  setCurrentEditIndex,
  setCurrentTextAreaValue,
} from "../../redux/slices/addRecipeFormSlice.js";
import { Heading } from "../Heading/Heading";
import { StyledDiv } from "./RecipePreparationTextArea.styled";

export const RecipePreparationTextArea = ({ className }) => {
  const { currentTextAreaValue, currentEditIndex } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value.trim() !== "") {
        if (currentEditIndex === null) {
          dispatch(addPreparationStep(event.target.value.trim()));
        } else {
          dispatch(editPreparationStep({ index: currentEditIndex, text: event.target.value }));
          dispatch(setCurrentEditIndex(null));
        }
      }
      dispatch(setCurrentTextAreaValue(""));
    }
  };

  const handleChange = (e) => {
    dispatch(setCurrentTextAreaValue(e.target.value));
  };

  return (
    <StyledDiv className={className}>
      <Heading as="h2">Recipe Preparation</Heading>
      <textarea
        placeholder="Enter preparation steps. Confirm each step with enter"
        value={currentTextAreaValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </StyledDiv>
  );
};

RecipePreparationTextArea.propTypes = {
  className: PropTypes.string,
};
