import { motion } from "framer-motion";
import styled from "styled-components";

import vegieBasketLowRes from "../../assets/images/vegieBasketLowRes.avif";
export const StyledPicture = styled(motion.picture)`
  aspect-ratio: 208 / 133;
  background-image: url(${vegieBasketLowRes});
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 26rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 30rem;
  }
  img {
    width: 100%;
    max-width: 26rem;
    height: auto;
    aspect-ratio: 208 / 133;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-width: 30rem;
    }
  }

  + p {
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.028rem;
    margin-top: 2.4rem;
  }
`;
