import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook that scrolls to the top of the page on every route change.
 */
export const useScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const rootDiv = document.getElementById("root");
    if (rootDiv && pathname.split("/").length === 2) {
      rootDiv.scrollTop = 0;
      console.log("Scrolling to top");
    }
  }, [pathname]);
};
