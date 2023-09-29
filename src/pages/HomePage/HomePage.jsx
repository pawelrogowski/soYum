import { Gallery } from "../../components/Gallery/Gallery";
import { Hero } from "../../components/Hero/Hero";
import img1 from "../../assets/images/food/thick-pancakes.jpg";
import img2 from "../../assets/images/food/M6A1135.jpg";
import img3 from "../../assets/images/food/Spinach_quinoa_patties_01.jpg";
import placeholder from "../../assets/images/food/placeholder.jpg";

const images = [
  { placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
  { placeholder: placeholder, img: img2, caption: "Ham Hock Colcannon" },
  { placeholder: placeholder, img: img3, caption: "Polish Pancakes" },
  { placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <Gallery data={images} heading="Breakfast" />
    </>
  );
};

export default HomePage;
