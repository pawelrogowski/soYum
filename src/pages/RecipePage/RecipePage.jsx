import { useParams } from "react-router-dom";
import { routeChangeMotion } from "../../common/animations";
import { HeroRecipe } from "../../components/HeroRecipe/HeroRecipe";
import { HeroRecipeText } from "../../components/HeroRecipeText/HeroRecipeText";
import { ProductList } from "../../components/ProductList/ProductList";
import { MainContainer } from "./RecipePage.styled";

const RecipeList = [
  {
    id: "1",
    title: "",
    ImageUrl: "",
    categories: ["", ""],
    about: "",
    cookingTime: "",
    ingedients: [{ ingredient: "", amount: "", measureType: "" }],
    preparationSteps: ["", "", ""],
  },
];

const RecipePage = () => {
  const { recipeId } = useParams();
  console.log("recipeId " + recipeId);
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
      <section className="list-section">
        <ProductList />
      </section>
    </MainContainer>
  );
};

export default RecipePage;
