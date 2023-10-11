import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import image from "../../assets/images/food/placeholder.jpg";
import { Heading } from "../../components/Heading/Heading";
import { PaginationFilter } from "../../components/PaginationFilter/PaginationFilter";
import { RecipeList } from "../../components/RecipeList/RecipeList";
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

  useEffect(() => {
    if (page) {
      setCurrentPage(parseInt(page, 10));
    } else {
      setCurrentPage(1);
    }
  }, [page]);
  return (
    <MainContainer>
      <Heading as="h1">My Recipes</Heading>
      <RecipeList data={imageList} />
      <PaginationFilter
        currentPage={currentPage}
        maxPages={50}
        maxPagesToDisplay={5}
        onPageChange={() => console.log("siuuu")}
      />
    </MainContainer>
  );
};

export default MyRecipesPage;
