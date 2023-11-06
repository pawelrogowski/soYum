import PropTypes from "prop-types";

import { logoMotion } from "../../common/animations";
import { LogoIcon } from "./Logo.styled";
export const Logo = ({ variant }) => {
  return <LogoIcon icon="logo" variant={variant || "header"} {...logoMotion} />;
};

Logo.propTypes = {
  variant: PropTypes.string,
};
