import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import srcsetAvif from "../../assets/images/hero.webp?w=320;480;640;768;896;1024;1200;1440;1600;1800;1920;2048;2200;2300;2400;2500;2600;2700;2800;2900;3000&format=avif&as=srcset";
import srcsetPng from "../../assets/images/hero.webp?w=320;480;640;768;896;1024;1200;1440;1600;1800;1920;2048;2200;2300;2400;2500;2600;2700;2800;2900;3000&format=png&as=srcset";
import srcsetWebp from "../../assets/images/hero.webp?w=320;480;640;768;896;1024;1200;1440;1600;1800;1920;2048;2200;2300;2400;2500;2600;2700;2800;2900;3000&format=webp&as=srcset";
import heroFallback from "../../assets/images/hero.webp?w=1520";
import { simpleOpacityMotion } from "../../common/animations";
import { breakpoints } from "../../styles/themes";
import { CallToAction, Heading, SquareBackground } from "..";
import { SearchForm } from "../Forms/SearchForm/SearchForm";
import { StyledDiv } from "./HeroHome.styled";

export const HeroHome = () => {
  const isMobileSize = useMediaQuery({ maxWidth: breakpoints.mobileMax });
  const isAtLeastTabletSize = useMediaQuery({
    minWidth: breakpoints.tablet,
  });

  const imageConfig = isMobileSize
    ? { width: "320px", height: "296px" }
    : isAtLeastTabletSize
    ? { width: "378px", height: "351px" }
    : { width: "578px", height: "539px" };
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
            type="image/avif"
            srcSet={srcsetAvif}
            sizes="(max-width: 767px) 95dvw, (max-width: 1023px) 59.9dvw, (max-width: 1440px) 55.9dvw"
          />
          <source
            type="image/webp"
            srcSet={srcsetWebp}
            sizes="(max-width: 767px) 95dvw, (max-width: 1023px) 59.9dvw, (max-width: 1440px) 55.9dvw"
          />
          <source
            type="image/png"
            srcSet={srcsetPng}
            sizes="(max-width: 767px) 95dvw, (max-width: 1023px) 59.9dvw, (max-width: 1440px) 55.9dvw"
          />
          <AnimatePresence>
            <motion.img
              src={heroFallback}
              alt="plate of delicious food"
              width={imageConfig.width}
              height={imageConfig.height}
              loading="eager"
              {...simpleOpacityMotion}
            />
          </AnimatePresence>
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

export default HeroHome;
