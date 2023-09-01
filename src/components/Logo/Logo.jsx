import { Link } from "react-router-dom";
import { LogoIcon } from "./Logo.styled";
import PropTypes from "prop-types";
export const Logo = ({ variant }) => {
  return (
    <Link to="#">
      <LogoIcon icon="logo" variant={variant || "header"} />
    </Link>
  );
};

Logo.propTypes = {
  variant: PropTypes.string,
};
