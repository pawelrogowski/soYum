import { routeChangeMotion } from "../../common/animations";
import { Heading } from "../../components/Heading/Heading";
import { ShoppingList } from "../../components/ShoppingList/ShoppingList";
import { MainContainer } from "./ShoppingListPage.styled";

const SearchPage = () => {
  return (
    <MainContainer {...routeChangeMotion}>
      <section>
        <Heading as="h1">Shopping list</Heading>
        <ShoppingList></ShoppingList>
      </section>
    </MainContainer>
  );
};

export default SearchPage;
