import { useMediaQuery } from "react-responsive";

import heroLowRes from "../../assets/images/hero.webp?w=50&format=avif";
import srcsetAvif from "../../assets/images/hero.webp?w=380;760;1520&format=avif&as=srcset";
import srcsetPng from "../../assets/images/hero.webp?w=380;760;1520&format=png&as=srcset";
import srcsetWebp from "../../assets/images/hero.webp?w=380;760;1520&format=webp&as=srcset";
import heroFallback from "../../assets/images/hero.webp?w=1520";
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
          <source type="image/avif" srcSet={srcsetAvif} />
          <source type="image/webp" srcSet={srcsetWebp} />
          <source type="image/png" srcSet={srcsetPng} />
          {isMobileSize ? (
            <img
              src={heroFallback}
              alt="plate of delicious food"
              width="320px"
              height="296px"
              loading="eager"
            />
          ) : isAtLeastTabletSize ? (
            <img
              src={heroFallback}
              alt="plate of delicious food"
              width="378px"
              height="351px"
              loading="eager"
            />
          ) : (
            <img
              src={heroFallback}
              alt="plate of delicious food"
              width="578px"
              height="539px"
              loading="eager"
            />
          )}
        </picture>
        <CallToAction
          text="way to enjoy a variety of fresh ingredients in one satisfying meal"
          highlightedText="Delicious and healthy"
          linkText="See recipes"
          icon="arrow_long"
        />
        <SquareBackground />
      </div>
      {isMobileSize && <SearchForm placeholder="beef" />}
    </StyledDiv>
  );
};
