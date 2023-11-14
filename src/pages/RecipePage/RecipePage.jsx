import { routeChangeMotion } from "../../common/animations";
import { Heading } from "../../components/Heading/Heading";
import { HeroRecipe } from "../../components/HeroRecipe/HeroRecipe";
import { HeroRecipeText } from "../../components/HeroRecipeText/HeroRecipeText";
import { MainContainer } from "./RecipePage.styled";

const RecipePage = () => {
  return (
    <MainContainer {...routeChangeMotion}>
      <section className="hero-section">
        <HeroRecipe />
        <HeroRecipeText
          id="1"
          title="Salmon Avocado Salad"
          about="Is a healthy salad recipe that’s big on nutrients and flavor. A moist, pan seared salmon is layered on top of spinach, avocado, tomatoes, and red onions. Then drizzled with a homemade lemon vinaigrette."
          cookingTime="20 min"
        />
        ;
      </section>
    </MainContainer>
  );
};

export default RecipePage;
