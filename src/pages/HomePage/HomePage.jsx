import { Gallery } from "../../components/Gallery/Gallery";
import { Hero } from "../../components/Hero/Hero";
import img1 from "../../assets/images/food/thick-pancakes.jpg";
import img2 from "../../assets/images/food/M6A1135.jpg";
import img3 from "../../assets/images/food/Spinach_quinoa_patties_01.jpg";
import placeholder from "../../assets/images/food/placeholder.jpg";
import { breakpoints } from "../../styles/themes";
import { useMediaQuery } from "react-responsive";
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
    <>
      <Hero />
      <Gallery data={images} heading="Breakfast" limit={imgNumPerCategory} />
      <Gallery
        data={images}
        heading="Miscellaneous"
        limit={imgNumPerCategory}
      />
      <Gallery data={images} heading="Chicken" limit={imgNumPerCategory} />
      <Gallery data={images} heading="Desserts" limit={imgNumPerCategory} />
    </>
  );
};

export default HomePage;
