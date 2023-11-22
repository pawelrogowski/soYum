import PropTypes from "prop-types";

import { logoMotion } from "../../common/animations";
import { LogoIcon } from "./Logo.styled";
export const Logo = ({ variant, onClick }) => {
  return <LogoIcon onClick={onClick} icon="logo" variant={variant || "header"} {...logoMotion} />;
};

Logo.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Logo;
