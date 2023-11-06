import { useMediaQuery } from "react-responsive";

import image from "../../assets/icons/product-placeholder.svg";
import { routeChangeMotion } from "../../common/animations";
import { FollowUs } from "../../components/FollowUs/FollowUs";
import { AddRecipeForm } from "../../components/Forms/AddRecipeForm/AddRecipeForm";
import { Heading } from "../../components/Heading/Heading";
import { PopularRecipeList } from "../../components/PopularRecipeList/PopularRecipeList";
import { breakpoints } from "../../styles/themes";
import { MainContainer } from "./AddRecipePage.styled";
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
const AddRecipePage = () => {
  const isDesktop = useMediaQuery({ minWidth: breakpoints.desktop });
  return (
    <MainContainer {...routeChangeMotion}>
      <section>
        <Heading as="h1" id="Categories">
          Add Recipe
        </Heading>
        <AddRecipeForm />
      </section>
      <aside>
        {isDesktop && <FollowUs />}
        <PopularRecipeList data={imageList} />
      </aside>
    </MainContainer>
  );
};

export default AddRecipePage;
