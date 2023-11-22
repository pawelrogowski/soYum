import PropTypes from "prop-types";

import { loaderLineMotion } from "../../common/animations";
import { StyledSpan } from "./LoaderLine.styled";

export const LoaderLine = ({ isGlobal }) => {
  return <StyledSpan {...loaderLineMotion} isGlobal={isGlobal} />;
};

LoaderLine.propTypes = {
  isGlobal: PropTypes.bool,
};

export default LoaderLine;
