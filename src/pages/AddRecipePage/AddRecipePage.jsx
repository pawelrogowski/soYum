import { AddRecipeForm } from "../../components/Forms/AddRecipeForm/AddRecipeForm";
import { Heading } from "../../components/Heading/Heading";
import { MainContainer } from "./AddRecipePage.styled";

const AddRecipePage = () => {
  return (
    <MainContainer>
      <section>
        <Heading as="h1" id="Categories">
          Add Recipe
        </Heading>
        <AddRecipeForm />
      </section>
    </MainContainer>
  );
};

export default AddRecipePage;
