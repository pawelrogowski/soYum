import PropTypes from "prop-types";

import { StyledHeading } from "./Heading.styled";

export const Heading = ({ children, as }) => {
  return <StyledHeading as={as}>{children}</StyledHeading>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string.isRequired,
};
