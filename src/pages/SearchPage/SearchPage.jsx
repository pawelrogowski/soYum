import { routeChangeMotion } from "../../common/animations";
import { searchFilterOptions } from "../../common/selectOptions";
import { SearchForm } from "../../components/Forms/SearchForm/SearchForm";
import { Heading } from "../../components/Heading/Heading";
import { MainContainer } from "./SearchPage.styled";

const SearchPage = () => {
  return (
    <MainContainer {...routeChangeMotion}>
      <Heading as="h1">Search</Heading>
      <SearchForm
        variant="page"
        placeholder="beef"
        filterPlaceholder="Title"
        filter
        filterOptions={searchFilterOptions}
      />
      <section>
        <div></div>
      </section>
    </MainContainer>
  );
};

export default SearchPage;
