// import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { routeChangeMotion } from "../../common/animations";
import { Heading } from "../../components/Heading/Heading";
import { HeroRecipe } from "../../components/HeroRecipe/HeroRecipe";
import { HeroRecipeText } from "../../components/HeroRecipeText/HeroRecipeText";
import { ProductList } from "../../components/ProductList/ProductList";
import { RecipePreparationSteps } from "../../components/RecipePreparationStepsPreview copy/RecipePreparationSteps";
import { MainContainer } from "./RecipePage.styled";

const RecipePage = () => {
  const { recipeId } = useParams();
  const currentRecipe = useSelector((state) => state.currentRecipe);
  console.log("recipeId " + recipeId);
  return (
    <MainContainer {...routeChangeMotion}>
      <section className="hero-section">
        <HeroRecipe />
        <HeroRecipeText
          id={currentRecipe[0].id}
          title={currentRecipe[0].title}
          about={currentRecipe[0].about}
          cookingTime={currentRecipe[0].cookingTime}
        />
        ;
      </section>
      <section className="list-section">
        <ProductList productArr={currentRecipe[0].ingredients} />
      </section>
      <section className="preparation-section">
        <Heading as="h2">Recipe Preparation</Heading>
        <RecipePreparationSteps stepArr={currentRecipe[0].preparationSteps} />
      </section>
    </MainContainer>
  );
};

// RecipePage.propTypes = {
//   recipe: PropTypes.object.isRequired,
// };

export default RecipePage;
