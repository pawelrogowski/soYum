import { useMediaQuery } from "react-responsive";

import heroMobileS1x from "../../assets/images/hero.webp?w=380&format=avif";
import heroTablet1x from "../../assets/images/hero.webp?w=540&format=avif";
import heroMobile1x from "../../assets/images/hero.webp?w=600&format=avif";
import heroDesktop1x from "../../assets/images/hero.webp?w=600&format=avif";
import heroMobileS2x from "../../assets/images/hero.webp?w=760&format=avif";
import heroTablet2x from "../../assets/images/hero.webp?w=1080&format=avif";
import heroFallback from "../../assets/images/hero.webp?w=1200";
import heroMobile2x from "../../assets/images/hero.webp?w=1200&format=avif";
import heroDesktop2x from "../../assets/images/hero.webp?w=1200&format=avif";
import heroMobileS3x from "../../assets/images/hero.webp?w=1520&format=avif";
import heroTablet3x from "../../assets/images/hero.webp?w=2160&format=avif";
import heroMobile3x from "../../assets/images/hero.webp?w=2400&format=avif";
import heroDesktop3x from "../../assets/images/hero.webp?w=2400&format=avif";
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
          <source
            media="(max-width: 479px)"
            srcSet={`${heroMobileS1x} 1x, ${heroMobileS2x} 2x, ${heroMobileS3x} 3x`}
          />
          <source
            media="(min-width: 480px), (max-width: 767px)"
            srcSet={`${heroMobile1x} 1x, ${heroMobile2x} 2x, ${heroMobile3x} 3x`}
          />
          <source
            media="(min-width: 768px) and (max-width: 1023px)"
            srcSet={`${heroTablet1x} 1x, ${heroTablet2x} 2x, ${heroTablet3x} 3x`}
          />
          <source
            media="(min-width: 1024px)"
            srcSet={`${heroDesktop1x} 1x, ${heroDesktop2x} 2x, ${heroDesktop3x} 3x`}
          />
          {isMobileSize ? (
            <img src={heroFallback} alt="plate of delicious food" width="320px" height="296px" />
          ) : isAtLeastTabletSize ? (
            <img src={heroFallback} alt="plate of delicious food" width="378px" height="351px" />
          ) : (
            <img src={heroFallback} alt="plate of delicious food" width="578px" height="539px" />
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
