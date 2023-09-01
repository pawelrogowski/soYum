import { StyledDiv } from "./Container.styled";
import PropTypes from "prop-types";

export const Container = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

Container.propTypes = {
  children: PropTypes.node,
};
