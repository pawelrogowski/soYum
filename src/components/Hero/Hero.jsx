import { useMediaQuery } from "react-responsive";

import hero from "../../assets/images/hero@x1.webp";
import herox1 from "../../assets/images/hero@x1.webp";
import herox2 from "../../assets/images/hero@x2.webp";
import herox3 from "../../assets/images/hero@x3.webp";
import { breakpoints } from "../../styles/themes";
import { CallToAction } from "../CallToAction/CallToAction";
import { SearchForm } from "../Forms/SearchForm/SearchForm";
import { StyledSection } from "./Hero.styled";

export const Hero = () => {
  const isMobileSize = useMediaQuery({ maxWidth: breakpoints.mobileMax });
  const isAtLeastTabletSize = useMediaQuery({
    minWidth: breakpoints.tablet,
  });
  return (
    <StyledSection>
      {isMobileSize ? (
        <>
          <div>
            <h1>
              <span>So</span>Yummy
            </h1>
            <p>
              &quot;What to cook?&quot; is not only a recipe app, it is, in
              fact, your cookbook. You can add your own recipes to save them for
              the future.
            </p>
          </div>
          <div>
            <picture>
              <source
                srcSet={`${herox1} 1x, ${herox2} 2x, ${herox3} 3x`}
                type="image/webp"
              />
              <img
                src={hero}
                alt="plate of delicious food"
                width="320px"
                height="320px"
              />
            </picture>
            <CallToAction
              text="way to enjoy a variety of fresh ingredients in one satisfying meal"
              highlightedText="Delicious and healthy"
              linkText="See recipes"
              icon="arrow_long"
            />
          </div>
          <SearchForm placeholder="beef" />
        </>
      ) : isAtLeastTabletSize ? (
        <>
          <div>
            <h1>
              <span>So</span>Yummy
            </h1>
            <p>
              &quot;What to cook?&quot; is not only a recipe app, it is, in
              fact, your cookbook. You can add your own recipes to save them for
              the future.
            </p>
            <SearchForm placeholder="beef" />
          </div>
          <div>
            <picture>
              <source
                srcSet={`${herox1} 1x, ${herox2} 2x, ${herox3} 3x`}
                type="image/webp"
              />
              <img src={hero} alt="plate of delicious food" />{" "}
            </picture>{" "}
          </div>
          <CallToAction
            text="way to enjoy a variety of fresh ingredients in one satisfying meal"
            highlightedText="Delicious and healthy"
            linkText="See recipes"
            icon="arrow_long"
          />
        </>
      ) : null}
    </StyledSection>
  );
};
