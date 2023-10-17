import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import placeholder from "../../assets/icons/food-placeholder.svg";
import img2 from "../../assets/images/food/M6A1135.jpg";
import img3 from "../../assets/images/food/Spinach_quinoa_patties_01.jpg";
import img1 from "../../assets/images/food/thick-pancakes.jpg";
import { Button } from "../../components/Button/Button";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { Hero } from "../../components/Hero/Hero";
import { breakpoints } from "../../styles/themes";
import { MainContainer } from "./HomePage.styled";

const images = [
  { placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
  { placeholder: placeholder, img: img2, caption: "Ham Hock Colcannon" },
  { placeholder: placeholder, img: img3, caption: "Polish Pancakes" },
  { placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
];

const HomePage = () => {
  const isAtLeastTabletSize = useMediaQuery({ minWidth: breakpoints.tablet });
  const isAtLeastDesktopSize = useMediaQuery({ minWidth: breakpoints.desktop });

  const imgNumPerCategory = isAtLeastDesktopSize
    ? 4
    : isAtLeastTabletSize
    ? 2
    : 1;

  return (
    <MainContainer>
      <Hero />
      <CardGallery
        data={images}
        showHeading
        showButton
        headingText="Breakfast"
        buttonText="See All"
        limit={imgNumPerCategory}
      />
      <CardGallery
        data={images}
        showHeading
        showButton
        headingText="Miscellaneous"
        buttonText="See All"
        limit={imgNumPerCategory}
      />
      <CardGallery
        data={images}
        showHeading
        showButton
        headingText="Chicken"
        buttonText="See All"
        limit={imgNumPerCategory}
      />
      <CardGallery
        data={images}
        showHeading
        showButton
        headingText="Desserts"
        buttonText="See All"
        limit={imgNumPerCategory}
      />
      <Link to="/categories">
        <Button variant="outlineBig">Other Categories</Button>
      </Link>
    </MainContainer>
  );
};

export default HomePage;
