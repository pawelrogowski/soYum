import { useLocation } from "react-router-dom";

export const useShowDecorations = () => {
  const { pathname } = useLocation();
  const pathName = pathname.split("/")[1];

  const decorPaths = {
    home: false,
    recipe: false,
    categories: true,
    add: true,
    favorites: true,
    myrecipes: true,
    shoppinglist: true,
    404: true,
    search: true,
  };

  return decorPaths[pathName];
};

export default useShowDecorations;
