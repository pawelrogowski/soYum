import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { inputErrorMotion, prepStepMotion } from "../../common/animations";
import {
  removePreparationStep,
  setCurrentEditIndex,
  setCurrentTextAreaValue,
  setPreparationStepError,
} from "../../redux/slices/addRecipeFormSlice";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";
import { InputErrorSpan } from "../InputErrorSpan/InputErrorSpan";
import { StyledDiv } from "./RecipePreparationStepsPreview.styled";
export const RecipePreparationStepsPreview = () => {
  const dispatch = useDispatch();
  const { recipePreparationSteps, currentEditIndex, currentTextAreaValueError } = useSelector(
    (state) => state.addRecipeForm
  );

  const handleRemoveStep = (index) => {
    dispatch(removePreparationStep(index));
    recipePreparationSteps.length < 2
      ? dispatch(setPreparationStepError("At least 3 steps are required"))
      : dispatch(setPreparationStepError(null));
  };

  const handleEditStep = (index) => {
    dispatch(setCurrentTextAreaValue(recipePreparationSteps[index]));
    dispatch(setCurrentEditIndex(index));
    console.log("editing", index);
  };

  return (
    <StyledDiv>
      <Heading as="h2">Steps</Heading>
      <AnimatePresence>
        {((recipePreparationSteps.length < 3 && recipePreparationSteps[0]) ||
          currentTextAreaValueError) && (
          <InputErrorSpan
            className="validation-error"
            errorMessage="At least 3 steps are required"
            {...inputErrorMotion}
          />
        )}
      </AnimatePresence>
      <ol>
        {recipePreparationSteps.length ? (
          <AnimatePresence>
            {recipePreparationSteps.map((_, index) => (
              <motion.li {...prepStepMotion} key={index}>
                <>
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
                  <p>{recipePreparationSteps[index]}</p>
                </>
              </motion.li>
            ))}
          </AnimatePresence>
        ) : (
          <motion.li {...prepStepMotion}>
            <span>Plase enter the steps above</span>
          </motion.li>
        )}
      </ol>
    </StyledDiv>
  );
};
