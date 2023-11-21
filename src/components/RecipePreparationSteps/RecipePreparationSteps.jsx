import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

import { prepStepMotion } from "../../common/animations";
import { StyledDiv } from "./RecipePreparationSteps.styled";

export const RecipePreparationSteps = ({ stepArr }) => {
  return (
    <StyledDiv>
      <ol>
        <AnimatePresence>
          {stepArr.map((step, index) => (
            <motion.li {...prepStepMotion} key={index}>
              <p>{step}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>
    </StyledDiv>
  );
};

RecipePreparationSteps.propTypes = {
  stepArr: PropTypes.array.isRequired,
};
