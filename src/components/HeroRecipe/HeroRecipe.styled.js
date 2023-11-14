import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledPicture = styled(motion.picture)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100dvw;
  transform: translateX(-50%);
  height: auto;
  aspect-ratio: 3 / 2;
  max-height: 45.5rem;
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    max-height: 49.5rem;
    width: 135dvw;
  }
  > img {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100dvw;
    transform: translateX(-50%);
    height: 45.5rem;
    object-fit: cover;
    object-position: top;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      min-height: 49.5rem;
      width: 135dvw;
      object-position: center;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      min-height: 49.5rem;
      width: 100dvw;
      object-position: center;
    }
  }
`;
