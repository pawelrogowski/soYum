import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { routeChangeMotion } from "../../common/animations";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { CategoryFilter } from "../../components/CategoryFilter/CategoryFilter";
import { Heading } from "../../components/Heading/Heading";
import { usePageTitle } from "../../hooks/usePageTitle";
import { getCategoryRecipes } from "../../redux/api/recipeAPI";
import { capitalizeFirstLetter } from "../../utils/stringManipulation";
import { MainContainer } from "./CategoriesPage.styled";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const query = new URLSearchParams(useLocation().search);
  const category = query.get("category");
  const recipes = useSelector((state) => state.categoryPage.results[category]);

  usePageTitle(capitalizeFirstLetter(category));

  useEffect(() => {
    dispatch(getCategoryRecipes(category));
  }, [dispatch, category]);

  return (
    <MainContainer {...routeChangeMotion}>
      <Heading as="h1" id="Categories">
        Categories
      </Heading>
      <CategoryFilter />
      <CardGallery
        {...routeChangeMotion}
        data={recipes?.hits || []}
        showHeading={false}
        showButton={false}
        headingText={capitalizeFirstLetter(category)}
        buttonText="See All"
      />
    </MainContainer>
  );
};

export default CategoriesPage;
