import { useMediaQuery } from "react-responsive";

import hero from "../../assets/images/hero@x1.webp";
import herox1 from "../../assets/images/hero@x1.webp";
import herox2 from "../../assets/images/hero@x2.webp";
import herox3 from "../../assets/images/hero@x3.webp";
import { breakpoints } from "../../styles/themes";
import { CallToAction } from "../CallToAction/CallToAction";
import { SearchForm } from "../Forms/SearchForm/SearchForm";
import { Heading } from "../Heading/Heading";
import { SquareBackground } from "../SquareBackground/SquareBackground";
import { StyledDiv } from "./Hero.styled";

export const Hero = () => {
  const isMobileSize = useMediaQuery({ maxWidth: breakpoints.mobileMax });
  const isAtLeastTabletSize = useMediaQuery({
    minWidth: breakpoints.tablet,
  });
  return (
    <StyledDiv>
      <div className="hero__text-container ">
        <Heading as="h1">
          <span>So</span>Yummy
        </Heading>
        <p>
          &quot;What to cook?&quot; is not only a recipe app, it is, in fact, your cookbook. You can
          add your own recipes to save them for the future.
        </p>
        {isAtLeastTabletSize && <SearchForm placeholder="beef" />}
      </div>
      <div className="hero__image-container">
        <picture>
          <source srcSet={`${herox1} 1x, ${herox2} 2x, ${herox3} 3x`} type="image/webp" />
          {isMobileSize ? (
            <img src={hero} alt="plate of delicious food" width="320px" height="296px" />
          ) : isAtLeastTabletSize ? (
            <img src={hero} alt="plate of delicious food" width="378px" height="351px" />
          ) : (
            <img src={hero} alt="plate of delicious food" width="578px" height="539px" />
          )}

          <SquareBackground />
        </picture>
        <CallToAction
          text="way to enjoy a variety of fresh ingredients in one satisfying meal"
          highlightedText="Delicious and healthy"
          linkText="See recipes"
          icon="arrow_long"
        />
      </div>
      {isMobileSize && <SearchForm placeholder="beef" />}
    </StyledDiv>
  );
};
