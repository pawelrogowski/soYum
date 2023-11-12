import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled(motion.main)`
  max-width: ${({ theme: t }) => t.breakpoints.maxContent};
  min-width: ${({ theme: t }) => t.breakpoints.minContent};
  padding: 10rem 2.1rem 10rem 2.1rem;
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100dvh - 62px);
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    padding-bottom: 20rem;
    min-height: calc(100dvh - 60.5px);
  }
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
    flex-direction: row;
    gap: 5rem;
  }
  > aside {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      max-width: 32rem;
      padding-top: 12rem;
    }
  }
  h2 {
    color: ${({ theme: t }) => t.heading.color};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.048rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      letter-spacing: -0.024rem;
    }
  }

  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    padding-bottom: 20rem;
  }
  > section {
    width: 100%;

    > h1 {
      margin-bottom: 6rem;
      align-self: flex-start;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        margin-bottom: 7.4rem;
      }
    }
    &:first-of-type {
      margin-bottom: 7.2rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        margin-bottom: 10rem;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        margin-bottom: 20rem;
      }
    }
  }
`;
