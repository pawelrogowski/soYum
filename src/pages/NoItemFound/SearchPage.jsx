import { routeChangeMotion } from "../../../common/animations";
import { searchFilterOptions } from "../../../common/selectOptions";
import { SearchForm } from "../../Forms/SearchForm/SearchForm";
import { Heading } from "../../Heading/Heading";
import { NoItemFound } from "./NoItemFound";
import { MainContainer } from "./SearchPage.styled";

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
        {<NoItemFound></NoItemFound>}
      </section>
    </MainContainer>
  );
};

export default SearchPage;
