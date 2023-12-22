import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";

import { baseButtonMotion, routeChangeMotion } from "../../common/animations";
import { Button } from "../../components/Button/Button";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { HeroHome } from "../../components/HeroHome/HeroHome";
import { usePageTitle } from "../../hooks/usePageTitle";
import { getHomePageRecipes } from "../../redux/api/recipeAPI";
import { breakpoints } from "../../styles/themes";
import { capitalizeFirstLetter } from "../../utils/stringManipulation";
import { MainContainer } from "./HomePage.styled";

const HomePage = () => {
  usePageTitle("Home");
  const navigate = useNavigate();
  const isAtLeastTabletSize = useMediaQuery({ minWidth: breakpoints.tablet });
  const isAtLeastDesktopSize = useMediaQuery({ minWidth: breakpoints.desktop });
  const dispatch = useDispatch();
  const imgNumPerCategory = isAtLeastDesktopSize ? 4 : isAtLeastTabletSize ? 2 : 1;
  const searchResults = useSelector((state) => state.homePage.results);

  const categorySettings = useMemo(
    () => ({
      breakfast: {
        keyword: "breakfast",
        health: "alcohol-free",
        imageSize: "large",
        random: "true",
      },
      brunch: {
        keyword: "brunch",
        health: "alcohol-free",
        imageSize: "large",
        random: "true",
      },
      lunch: {
        keyword: "lunch",
        health: "alcohol-free",
        imageSize: "large",
        random: "true",
      },
      dinner: { keyword: "dinner", dishType: "main course", imageSize: "large", random: "true" },
      snack: {
        keyword: "snack",
        health: "alcohol-free",
        imageSize: "large",
        random: "true",
      },
    }),
    []
  );

  const categories = useMemo(() => Object.keys(categorySettings), [categorySettings]);

  useEffect(() => {
    categories.forEach((category) => {
      const settings = categorySettings[category];
      const params = {
        mealType: category,

        ...(settings.keyword && { keyword: settings.keyword }),
        ...(settings.diet && { diet: settings.diet }),
        ...(settings.health && { health: settings.health }),
        ...(settings.cuisineType && { cuisineType: settings.cuisineType }),
        ...(settings.dishType && { dishType: settings.dishType }),
        ...(settings.imageSize && { imageSize: settings.imageSize }),
        ...(settings.random && { random: settings.random }),
      };
      dispatch(getHomePageRecipes(params));
    });
  }, [dispatch, categories, categorySettings]);

  return (
    <MainContainer {...routeChangeMotion}>
      <section className="section-hero">
        <HeroHome />
      </section>
      {categories.map((category) => (
        <CardGallery
          key={category}
          data={searchResults[category]?.hits || []}
          showHeading
          showButton
          headingText={capitalizeFirstLetter(category)}
          buttonText="See All"
          limit={imgNumPerCategory}
          onButtonClick={() => navigate(`/categories/${category}`)}
        />
      ))}
      <Link to="/categories?category=beef">
        <Button variant="outlineBig" {...baseButtonMotion}>
          Other Categories
        </Button>
      </Link>
    </MainContainer>
  );
};

export default HomePage;
