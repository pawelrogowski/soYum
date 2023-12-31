import heroFallback from "../../assets/images/heroRecipe.avif";
import srcSetAvif from "../../assets/images/heroRecipe.avif?w=320;480;640;768;896;1024;1200;1440;1600;1800;1920;2048;2200;2300;2400;2500;2600;2700;2800;2900;3000;4096&format=avif&as=srcset";
import srcSetPng from "../../assets/images/heroRecipe.avif?w=320;480;640;768;896;1024;1200;1440;1600;1800;1920;2048;2200;2300;2400;2500;2600;2700;2800;2900;3000;4096&format=png&as=srcset";
import srcSetWebp from "../../assets/images/heroRecipe.avif?w=320;480;640;768;896;1024;1200;1440;1600;1800;1920;2048;2200;2300;2400;2500;2600;2700;2800;2900;3000;4096&format=webp&as=srcset";
import { StyledPicture } from "./HeroRecipe.styled";

export const HeroRecipe = () => (
  <StyledPicture>
    <source type="image/avif" srcSet={srcSetAvif} />
    <source type="image/webp" srcSet={srcSetWebp} />
    <source type="image/png" srcSet={srcSetPng} />
    <img src={heroFallback} alt="nicely sorted vegetables" loading="eager" />
  </StyledPicture>
);

export default HeroRecipe;
