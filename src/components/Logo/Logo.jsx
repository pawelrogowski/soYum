import PropTypes from "prop-types";

import { LogoIcon } from "./Logo.styled";
export const Logo = ({ variant }) => {
  return <LogoIcon icon="logo" variant={variant || "header"} />;
};

Logo.propTypes = {
  variant: PropTypes.string,
};
