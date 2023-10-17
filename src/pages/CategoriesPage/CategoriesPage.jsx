import placeholder from "../../assets/icons/food-placeholder.svg";
import img2 from "../../assets/images/food/M6A1135.jpg";
import img3 from "../../assets/images/food/Spinach_quinoa_patties_01.jpg";
import img1 from "../../assets/images/food/thick-pancakes.jpg";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { CategoryFilter } from "../../components/CategoryFilter/CategoryFilter";
import { Heading } from "../../components/Heading/Heading";
import { MainContainer } from "./CategoriesPage.styled";

const images = [
  { placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
  { placeholder: placeholder, img: img2, caption: "Ham Hock Colcannon" },
  { placeholder: placeholder, img: img3, caption: "Polish Pancakes" },
  { placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
];

const CategoriesPage = () => {
  return (
    <MainContainer>
      <Heading as="h1" id="Categories">
        Categories
      </Heading>
      <CategoryFilter />
      <CardGallery
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
