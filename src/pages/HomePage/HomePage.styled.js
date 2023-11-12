import { motion } from "framer-motion";
import styled from "styled-components";

import leaves from "../../assets/images/leavesDecor.avif";
export const MainContainer = styled(motion.main)`
  max-width: ${({ theme: t }) => t.breakpoints.maxContent};
  min-width: ${({ theme: t }) => t.breakpoints.minContent};
  position: relative;
  padding: 6.8rem 2.1rem 10rem 2.1rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10rem;

  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    padding-bottom: 20rem;
  }
  section:last-of-type {
    padding-bottom: 6rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      padding-bottom: 10rem;
    }
  }

  .section-hero {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 54.36rem;
    min-width: 32rem;
    padding-bottom: 14.7rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      flex-direction: row;
      padding-bottom: 19.5rem;
      min-height: 71.9rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      gap: 2rem;
      padding-bottom: 23.5rem;
      min-height: 85.7rem;
    }
    &:after {
      content: "";
      position: absolute;
      top: 12rem;
      left: -7.2rem;
      width: 45%;
      height: 45%;
      max-width: 31.5rem;
      transform: translate(-50%, -50%) rotate(5deg) scaleX(-1);
      background-image: url(${leaves});
      background-size: contain;
      filter: blur(0.3rem);
      z-index: -1;
      background-repeat: no-repeat;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        top: 3rem;
        left: -10rem;
        max-width: 31.5rem;
        transform: translate(-50%, -50%) rotate(4deg) scaleX(-1);
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        top: 8rem;
        left: -15.1rem;
        max-width: 41.5rem;
        transform: translate(-50%, -50%) rotate(-3deg) scaleX(-1);
      }
    }
  }
`;
