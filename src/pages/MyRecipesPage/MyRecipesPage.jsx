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
  return (
    <MainContainer>
      <Heading as="h1">My Recipes</Heading>
      <RecipeList data={imageList} />
      <PaginationFilter currentPage={1} maxPages={5} />
    </MainContainer>
  );
};

export default MyRecipesPage;
