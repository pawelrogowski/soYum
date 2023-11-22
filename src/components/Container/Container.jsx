import PropTypes from "prop-types";

import { StyledDiv } from "./Container.styled";

export const Container = ({ children, as }) => {
  return <StyledDiv as={as}>{children}</StyledDiv>;
};

Container.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
};

export default Container;
