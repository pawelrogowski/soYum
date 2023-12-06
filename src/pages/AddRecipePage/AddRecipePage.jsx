import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import image from "../../assets/icons/product-placeholder.svg";
import { routeChangeMotion } from "../../common/animations";
import { FollowUs } from "../../components/FollowUs/FollowUs";
import { AddRecipeForm } from "../../components/Forms/AddRecipeForm/AddRecipeForm";
import { Heading } from "../../components/Heading/Heading";
import LoginRequiredInfo from "../../components/LoginRequiredInfo/LoginRequiredInfo.jsx";
import { PopularRecipeList } from "../../components/PopularRecipeList/PopularRecipeList";
import { usePageTitle } from "../../hooks/usePageTitle.js";
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
  usePageTitle("Add Recipe");
  const isDesktop = useMediaQuery({ minWidth: breakpoints.desktop });
  const isLoggedIn = useSelector((state) => state.user.user.name);
  return (
    <MainContainer {...routeChangeMotion}>
      {isLoggedIn ? (
        <>
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
        </>
      ) : (
        <LoginRequiredInfo />
      )}
    </MainContainer>
  );
};

export default AddRecipePage;
