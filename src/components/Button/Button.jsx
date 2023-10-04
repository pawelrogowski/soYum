import PropTypes from "prop-types";

import { StyledButton } from "./Button.styled";

export const Button = ({ variant, type, children }) => {
  return (
    <StyledButton $variant={variant} type={type}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
};
