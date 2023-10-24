import { useDispatch, useSelector } from "react-redux";

import {
  removePreparationStep,
  setCurrentEditIndex,
  setCurrentTextAreaValue,
} from "../../redux/slices/addRecipeFormSlice";
import { limitTextLength } from "../../utils/stringManipulation";
import { Icon } from "../Icon/Icon";
import { StyledOl } from "./RecipePreparationStepsPreview.styled";
export const RecipePreparationStepsPreview = () => {
  const dispatch = useDispatch();
  const { recipePreparationSteps } = useSelector((state) => state.addRecipeForm);

  const handleRemoveStep = (index) => {
    dispatch(removePreparationStep(index));
  };

  const handleEditStep = (index) => {
    dispatch(setCurrentTextAreaValue(recipePreparationSteps[index]));
    dispatch(setCurrentEditIndex(index));
  };

  return (
    <StyledOl>
      {recipePreparationSteps.map((_, index) => (
        <li key={index}>
          <button type="button" onClick={() => handleEditStep(index)}>
            <Icon icon="edit" />
          </button>
          <button type="button" onClick={() => handleRemoveStep(index)}>
            <Icon icon="x" />
          </button>

          {limitTextLength(recipePreparationSteps[index], 2, 120, "...")}
        </li>
      ))}
    </StyledOl>
  );
};
