import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

export const LocationProvider = ({ children }) => {
  return (
    <AnimatePresence initial={true} mode="wait">
      {children}
    </AnimatePresence>
  );
};

LocationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LocationProvider;
