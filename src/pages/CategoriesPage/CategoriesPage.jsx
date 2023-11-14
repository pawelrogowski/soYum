import { useLocation } from "react-router-dom";

import placeholder from "../../assets/icons/food-placeholder.svg";
import img2 from "../../assets/images/food/M6A1135.jpg";
import img3 from "../../assets/images/food/Spinach_quinoa_patties_01.jpg";
import img1 from "../../assets/images/food/thick-pancakes.jpg";
import { routeChangeMotion } from "../../common/animations";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { CategoryFilter } from "../../components/CategoryFilter/CategoryFilter";
import { Heading } from "../../components/Heading/Heading";
import { MainContainer } from "./CategoriesPage.styled";

const images = [
  { id: "1", placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
  { id: "2", placeholder: placeholder, img: img2, caption: "Ham Hock Colcannon" },
  { id: "3", placeholder: placeholder, img: img3, caption: "Polish Pancakes" },
  { id: "4", placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
];

const CategoriesPage = () => {
  const location = useLocation();
  const shouldAnimate = location.pathname.split("/").length <= 2;

  const variants = shouldAnimate ? routeChangeMotion : {};

  return (
    <MainContainer {...variants}>
      <Heading as="h1" id="Categories">
        Categories
      </Heading>
      <CategoryFilter />
      <CardGallery
        {...routeChangeMotion}
        data={images}
        showHeading={false}
        showButton={false}
        headingText="Breakfast"
        buttonText="See All"
      />
    </MainContainer>
  );
};

export default CategoriesPage;
