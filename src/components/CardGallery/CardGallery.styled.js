import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledGallery = styled(motion.section)`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;
  gap: 2.4rem;
  width: 100%;
  @media screen and (max-width: ${({ theme: t }) => t.breakpoints.mobileMax}) {
    max-width: 48rem;
  }

  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    gap: 4rem;
  }
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
    gap: 5rem;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  > button {
    align-self: flex-end;
    max-width: 9.4rem;
    max-height: 3.8rem;
    font-size: 1.4rem;
    line-height: 1.285;
    &:hover,
    &:focus,
    &:active {
      border-color: #8baa36;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;

    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      gap: 3.2rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      gap: 1.4rem;
    }
    li {
      flex-basis: 100%;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        flex-basis: calc((100% - 1 * 3.2rem) / 2);
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        flex-basis: calc((100% - 3 * 1.4rem) / 4);
      }
    }
  }
`;
