import { StyledDiv } from "./Container.styled";
import PropTypes from "prop-types";

export const Container = ({ children, as }) => {
  return <StyledDiv as={as}>{children}</StyledDiv>;
};

Container.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
};
