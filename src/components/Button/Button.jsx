import PropTypes from "prop-types";

import { StyledButton } from "./Button.styled";

export const Button = ({ variant, type, children, disabled, onClick }, props) => {
  return (
    <StyledButton $variant={variant} type={type} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
