import { StyledSection } from "./Hero.styled";
import { SearchForm } from "../SearchForm/SearchForm";
import hero from "../../assets/images/hero@x1.webp";
import herox1 from "../../assets/images/hero@x1.webp";
import herox2 from "../../assets/images/hero@x2.webp";
import herox3 from "../../assets/images/hero@x3.webp";
export const Hero = () => {
  return (
    <StyledSection>
      <div>
        <h1>
          <span>So </span>Yummy
        </h1>
        <p>
          &quot;What to cook?&quot; is not only a recipe app, it is, in fact,
          your cookbook. You can add your own recipes to save them for the
          future.
        </p>
      </div>
      <picture>
        <source
          srcSet={`${herox1} 1x, ${herox2} 2x, ${herox3} 3x`}
          type="image/webp"
        />
        <img src={hero} alt="plate of delicious food" />
      </picture>
      <SearchForm placeholder="beef" />
    </StyledSection>
  );
};
