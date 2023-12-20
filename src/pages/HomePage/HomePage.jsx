import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";

import placeholder from "../../assets/icons/food-placeholder.svg";
import img2 from "../../assets/images/food/M6A1135.jpg";
import img3 from "../../assets/images/food/Spinach_quinoa_patties_01.jpg";
import img1 from "../../assets/images/food/thick-pancakes.jpg";
import { baseButtonMotion, routeChangeMotion } from "../../common/animations";
import { Button } from "../../components/Button/Button";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { HeroHome } from "../../components/HeroHome/HeroHome";
import { usePageTitle } from "../../hooks/usePageTitle";
import { searchRecipes } from "../../redux/api/recipeAPI";
import { breakpoints } from "../../styles/themes";
import { MainContainer } from "./HomePage.styled";

const images = [
  { id: "1", placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
  { id: "2", placeholder: placeholder, img: img2, caption: "Ham Hock Colcannon" },
  { id: "3", placeholder: placeholder, img: img3, caption: "Polish Pancakes" },
  { id: "4", placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
];

const HomePage = () => {
  usePageTitle("Home");
  const navigate = useNavigate();
  const isAtLeastTabletSize = useMediaQuery({ minWidth: breakpoints.tablet });
  const isAtLeastDesktopSize = useMediaQuery({ minWidth: breakpoints.desktop });
  const dispatch = useDispatch();
  const imgNumPerCategory = isAtLeastDesktopSize ? 4 : isAtLeastTabletSize ? 2 : 1;
  const searchResults = useSelector((state) => state.search.results);

  const categories = useMemo(() => ["breakfast", "brunch", "lunch", "dinner", "snack"], []);

  useEffect(() => {
    categories.forEach((category) => {
      dispatch(searchRecipes({ mealType: category }));
    });
  }, [dispatch, categories]);

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
          headingText={category}
          buttonText="See All"
          limit={imgNumPerCategory}
          onButtonClick={() => navigate(`/categories/${category}`)}
        />
      ))}
      <Link to="/categories/beef">
        <Button variant="outlineBig" {...baseButtonMotion}>
          Other Categories
        </Button>
      </Link>
    </MainContainer>
  );
};

export default HomePage;
