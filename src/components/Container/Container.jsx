import { StyledDiv } from "./Container.styled";
import PropTypes from "prop-types";

export const Container = ({ children, variant, as }) => {
  return (
    <StyledDiv as={as} $variant={variant}>
      {children}
    </StyledDiv>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  as: PropTypes.string,
};
