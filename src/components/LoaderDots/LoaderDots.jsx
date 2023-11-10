import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import { loaderDotsMotion } from "../../common/animations";
import { StyledDiv } from "./LoaderDots.styled";

export const LoaderDots = ({ variant }) => {
  return (
    <AnimatePresence>
      <StyledDiv $variant={variant} {...loaderDotsMotion}>
        <div></div> <p>This takes longer than expected</p>
      </StyledDiv>
    </AnimatePresence>
  );
};

LoaderDots.propTypes = {
  variant: PropTypes.string,
};
