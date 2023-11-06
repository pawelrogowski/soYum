import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";

import image from "../../assets/images/placeholder.png";
import { routeChangeMotion } from "../../common/animations";
import { Heading } from "../../components/Heading/Heading";
import { PaginationFilter } from "../../components/PaginationFilter/PaginationFilter";
import { RecipeList } from "../../components/RecipeList/RecipeList";
import { breakpoints } from "../../styles/themes";
import { MainContainer } from "./MyRecipesPage.styled";

const imageList = [
  {
    name: "Apple Frangipan Tart",
    cookingTime: "40min",
    image: image,
    description:
      "Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is filled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves.",
  },
  {
    name: "test1",
    cookingTime: "20min",
    image: image,
    description:
      "Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is filled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves.",
  },
  {
    name: "test1",
    cookingTime: "20min",
    image: image,
    description:
      "Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is filled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves.",
  },
  {
    name: "test1",
    cookingTime: "20min",
    image: image,
    description:
      "Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is filled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves.",
  },
];
const MyRecipesPage = () => {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const isAtLeastDesktop = useMediaQuery({ minWidth: breakpoints.desktop });

  const dynamicMaxPages = isAtLeastDesktop ? 9 : 5;

  useEffect(() => {
    if (page) {
      setCurrentPage(parseInt(page, 10));
    } else {
      setCurrentPage(1);
    }
  }, [page]);
  return (
    <MainContainer {...routeChangeMotion}>
      <Heading as="h1">My Recipes</Heading>
      <RecipeList data={imageList} />
      <PaginationFilter
        currentPage={currentPage}
        maxPages={50}
        maxPagesToDisplay={dynamicMaxPages}
        onPageChange={() => console.log("siuuu")}
      />
    </MainContainer>
  );
};

export default MyRecipesPage;
