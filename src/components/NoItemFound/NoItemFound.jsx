import vegieBasket from "../../assets/images/vegieBasket.avif";
import vegieBasketSrcsetAvif from "../../assets/images/vegieBasket.avif?w=260;300&format=avif&as=srcset";
import vegieBasketSrcsetPng from "../../assets/images/vegieBasket.avif?w=260;300&format=png&as=srcset";
import vegieBasketSrcsetWebp from "../../assets/images/vegieBasket.avif?w=260;300&format=webp&as=srcset";
import { StyledParagraph, StyledPicture } from "./NoItemFound.styled";

export const NoItemFound = () => (
  <>
    <StyledPicture>
      <source srcSet={vegieBasketSrcsetAvif} />
      <source srcSet={vegieBasketSrcsetWebp} />
      <source srcSet={vegieBasketSrcsetPng} />
      <img
        src={vegieBasket}
        alt="a tipped over basket of vegetables"
        width="300px"
        height="192px"
        loading="eager"
      />
    </StyledPicture>{" "}
    <StyledParagraph>Try looking for something else...</StyledParagraph>
  </>
);

export default NoItemFound;
