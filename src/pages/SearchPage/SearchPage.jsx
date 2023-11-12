// import placeholder from "../../assets/icons/food-placeholder.svg";
// import img2 from "../../assets/images/food/M6A1135.jpg";
// import img3 from "../../assets/images/food/Spinach_quinoa_patties_01.jpg";
// import img1 from "../../assets/images/food/thick-pancakes.jpg";
import { routeChangeMotion } from "../../common/animations";
import { searchFilterOptions } from "../../common/selectOptions";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { SearchForm } from "../../components/Forms/SearchForm/SearchForm";
import { Heading } from "../../components/Heading/Heading";
import { NoItemFound } from "../../components/NoItemFound/NoItemFound";
import { MainContainer } from "./SearchPage.styled";
const images = [
  // { placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
  // { placeholder: placeholder, img: img2, caption: "Ham Hock Colcannon" },
  // { placeholder: placeholder, img: img3, caption: "Polish Pancakes" },
  // { placeholder: placeholder, img: img1, caption: "Banana Pancakes" },
];

const SearchPage = () => {
  return (
    <MainContainer {...routeChangeMotion}>
      <section>
        <Heading as="h1">Search</Heading>
        <SearchForm
          variant="page"
          placeholder="beef"
          filterPlaceholder="Title"
          filter
          filterOptions={searchFilterOptions}
        />
      </section>
      <section>
        <Heading as="h2">Search Results</Heading>
        {images.length ? <CardGallery data={images} limit={Infinity} /> : <NoItemFound />}
      </section>
    </MainContainer>
  );
};

export default SearchPage;
