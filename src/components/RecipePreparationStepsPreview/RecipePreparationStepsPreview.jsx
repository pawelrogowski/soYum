import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { inputErrorMotion, prepStepMotion } from "../../common/animations";
import {
  removePreparationStep,
  setField,
  setFieldError,
} from "../../redux/slices/addRecipeFormSlice";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";
import { InputErrorSpan } from "../InputErrorSpan/InputErrorSpan";
import { StyledDiv } from "./RecipePreparationStepsPreview.styled";

export const RecipePreparationStepsPreview = () => {
  const dispatch = useDispatch();
  const { recipePreparationSteps, currentEditIndex, recipePreparationStepsError } = useSelector(
    (state) => state.addRecipeForm
  );

  const handleRemoveStep = (index) => {
    dispatch(removePreparationStep(index));
    recipePreparationSteps.length < 3
      ? dispatch(
          setFieldError({ field: "recipePreparationSteps", error: "At least 3 steps are required" })
        )
      : dispatch(setFieldError({ field: "recipePreparationSteps", error: null }));
  };

  const handleStepUpdate = (index) => {
    const stepValue = recipePreparationSteps[index].text;
    dispatch(setField({ field: "currentTextAreaValue", value: stepValue }));
    dispatch(setField({ field: "currentEditIndex", value: index }));
  };

  return (
    <StyledDiv>
      <Heading as="h2">Steps Preview</Heading>
      <AnimatePresence>
        {recipePreparationStepsError && (
          <InputErrorSpan
            className="validation-error"
            errorMessage={recipePreparationStepsError}
            {...inputErrorMotion}
          />
        )}
      </AnimatePresence>
      <ol>
        {recipePreparationSteps.length ? (
          <AnimatePresence>
            {recipePreparationSteps.map((prepStep, index) => (
              <motion.li {...prepStepMotion} key={prepStep.id}>
                <>
                  <button
                    type="button"
                    onClick={() => handleStepUpdate(index)}
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
                  <p>{prepStep.text}</p>
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

export default RecipePreparationStepsPreview;
