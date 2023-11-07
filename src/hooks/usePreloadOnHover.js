import { useEffect } from "react";

// whole paths are used because vite does not support dynamic imports out of the box
// the usecade does not justify adding plugins imo

const usePreloadOnHover = (links) => {
  useEffect(() => {
    const preloadLink = (event) => {
      const href = event.target.getAttribute("href");
      const link = links.find((link) => link.to === href);
      if (link && link.component) {
        switch (link.component) {
          case "SignInPage":
            import("../pages/SignInPage/SignInPage.jsx");
            break;
          case "RegistrationPage":
            import("../pages/RegistrationPage/RegistrationPage.jsx");
            break;
          case "StartPage":
            import("../pages/StartPage/StartPage.jsx");
            break;
          case "HomePage":
            import("../pages/HomePage/HomePage.jsx");
            break;
          case "CategoriesPage":
            import("../pages/CategoriesPage/CategoriesPage.jsx");
            break;
          case "MyRecipesPage":
            import("../pages/MyRecipesPage/MyRecipesPage.jsx");
            break;
          case "AddRecipePage":
            import("../pages/AddRecipePage/AddRecipePage");
            break;
          case "FavoritesPage":
            import("../pages/FavoritesPage/FavoritesPage.jsx");
            break;
          case "SearchPage":
            import("../pages/SearchPage/SearchPage.jsx");
            break;
          case "NotFoundPage":
            import("../pages/NotFoundPage/NotFoundPage.jsx");
            break;
          default:
            break;
        }
      }
    };

    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const anchors = document.querySelectorAll("a");
          anchors.forEach((anchor) => {
            anchor.addEventListener("mouseover", preloadLink);
          });
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const anchors = document.querySelectorAll("a");
      anchors.forEach((anchor) => {
        anchor.removeEventListener("mouseover", preloadLink);
      });
    };
  }, [links]);
};

export default usePreloadOnHover;
