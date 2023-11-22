import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { inputErrorMotion } from "../../common/animations";

export const InputErrorSpan = ({ errorMessage, key, className }, props) => {
  return (
    <motion.span key={key} className={className} {...inputErrorMotion} {...props}>
      {errorMessage}
    </motion.span>
  );
};

InputErrorSpan.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  key: PropTypes.string,
  className: PropTypes.string,
};

export default InputErrorSpan;
