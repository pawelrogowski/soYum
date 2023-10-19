import { AddRecipeForm } from "../../components/Forms/AddRecipeForm/AddRecipeForm";
import { Heading } from "../../components/Heading/Heading";
import { MainContainer } from "./AddRecipePage.styled";

const AddRecipePage = () => {
  return (
    <MainContainer>
      <Heading as="h1" id="Categories">
        Add Recipe
      </Heading>
      <AddRecipeForm />
    </MainContainer>
  );
};

export default AddRecipePage;
