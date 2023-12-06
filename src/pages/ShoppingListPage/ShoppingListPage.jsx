import { useSelector } from "react-redux";

import { routeChangeMotion } from "../../common/animations";
import { Heading } from "../../components/Heading/Heading";
import LoginRequiredInfo from "../../components/LoginRequiredInfo/LoginRequiredInfo";
import { ShoppingList } from "../../components/ShoppingList/ShoppingList";
import { usePageTitle } from "../../hooks/usePageTitle";
import { MainContainer } from "./ShoppingListPage.styled";

const ShoppingListPage = () => {
  const isLoggedIn = useSelector((state) => state.user.user.name);

  usePageTitle("Shopping List");
  return (
    <MainContainer {...routeChangeMotion}>
      {isLoggedIn ? (
        <>
          <section>
            <Heading as="h1">Shopping list</Heading>
            <ShoppingList></ShoppingList>
          </section>
        </>
      ) : (
        <LoginRequiredInfo />
      )}
    </MainContainer>
  );
};

export default ShoppingListPage;
