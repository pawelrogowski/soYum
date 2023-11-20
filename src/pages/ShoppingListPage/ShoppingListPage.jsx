import { routeChangeMotion } from "../../common/animations";
import { Heading } from "../../components/Heading/Heading";
import { ShoppingList } from "../../components/ShoppingList/ShoppingList";
import { usePageTitle } from "../../hooks/usePageTitle";
import { MainContainer } from "./ShoppingListPage.styled";

const ShoppingListPage = () => {
  usePageTitle("Shopping List");
  return (
    <MainContainer {...routeChangeMotion}>
      <section>
        <Heading as="h1">Shopping list</Heading>
        <ShoppingList></ShoppingList>
      </section>
    </MainContainer>
  );
};

export default ShoppingListPage;
