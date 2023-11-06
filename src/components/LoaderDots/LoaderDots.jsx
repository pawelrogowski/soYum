import PropTypes from "prop-types";

import { StyledDiv } from "./LoaderDots.styled";

export const LoaderDots = ({ variant }) => {
  return (
    <StyledDiv $variant={variant}>
      <div></div> <p>This takes longer than expected</p>
    </StyledDiv>
  );
};

LoaderDots.propTypes = {
  variant: PropTypes.string,
};
