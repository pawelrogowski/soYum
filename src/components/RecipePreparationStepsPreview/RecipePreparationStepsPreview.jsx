import { useDispatch, useSelector } from "react-redux";

import {
  removePreparationStep,
  setCurrentEditIndex,
  setCurrentTextAreaValue,
} from "../../redux/slices/addRecipeFormSlice";
import { limitTextLength } from "../../utils/stringManipulation";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./RecipePreparationStepsPreview.styled";
export const RecipePreparationStepsPreview = () => {
  const dispatch = useDispatch();
  const { recipePreparationSteps, currentEditIndex } = useSelector((state) => state.addRecipeForm);

  const handleRemoveStep = (index) => {
    dispatch(removePreparationStep(index));
  };

  const handleEditStep = (index) => {
    dispatch(setCurrentTextAreaValue(recipePreparationSteps[index]));
    dispatch(setCurrentEditIndex(index));
  };

  return (
    <StyledDiv>
      <Heading as="h2">Steps:</Heading>
      <ol>
        {recipePreparationSteps.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => handleEditStep(index)}
              disabled={currentEditIndex !== null}
            >
              <Icon icon="edit" />
            </button>
            <button
              type="button"
              onClick={() => handleRemoveStep(index)}
              disabled={currentEditIndex !== null}
            >
              <Icon icon="x" />
            </button>

            {limitTextLength(recipePreparationSteps[index], 2, 120, "...")}
          </li>
        ))}
      </ol>
    </StyledDiv>
  );
};
