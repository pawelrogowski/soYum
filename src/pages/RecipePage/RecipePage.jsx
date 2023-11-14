import { routeChangeMotion } from "../../common/animations";
import { Heading } from "../../components/Heading/Heading";
import { MainContainer } from "./RecipePage.styled";

const RecipePage = () => {
  return <MainContainer {...routeChangeMotion}></MainContainer>;
};

export default RecipePage;
