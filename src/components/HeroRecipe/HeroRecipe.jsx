import heroFallback from "../../assets/images/heroRecipe.avif";
import srcSetAvif from "../../assets/images/heroRecipe.avif?w=384;767;1023;1536;3072;4096&format=avif&as=srcset";
import srcSetPng from "../../assets/images/heroRecipe.avif?w=384;767;1023;1536;3072;4096&format=png&as=srcset";
import srcSetWebp from "../../assets/images/heroRecipe.avif?w=384;767;1023;1536;3072;4096&format=webp&as=srcset";
import { StyledPicture } from "./HeroRecipe.styled";

export const HeroRecipe = () => (
  <StyledPicture>
    <source type="image/avif" srcSet={srcSetAvif} />
    <source type="image/webp" srcSet={srcSetWebp} />
    <source type="image/png" srcSet={srcSetPng} />
    <img src={heroFallback} alt="nicely sorted vegetables" loading="eager" />
  </StyledPicture>
);
