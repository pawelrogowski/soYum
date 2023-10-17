import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { capitalizeFirstLetter } from "../utils/stringManipulation";

/**
 * Custom hook to update the page title based on the current route.
 */
const usePageTitle = (baseTitle) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const firstLayer = capitalizeFirstLetter(path.split("/")[1]);

    document.title = `${baseTitle} - ${firstLayer}`;
  }, [location, baseTitle]);
};

export default usePageTitle;
