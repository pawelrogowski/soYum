import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { capitalizeFirstLetter } from "../utils/stringManipulation";
const usePageTitle = () => {
  const baseTitle = "So Yummy";
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const firstLayer = capitalizeFirstLetter(path.split("/")[1]);

    document.title = `${baseTitle} - ${firstLayer}`;
  }, [location]);
};

export default usePageTitle;
