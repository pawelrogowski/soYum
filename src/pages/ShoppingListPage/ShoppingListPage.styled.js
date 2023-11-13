import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled(motion.main)`
  max-width: ${({ theme: t }) => t.breakpoints.maxContent};
  min-width: ${({ theme: t }) => t.breakpoints.minContent};
  padding: 10rem 2.1rem 10rem 2.1rem;
  position: relative;
  margin: 0 auto;
  width: 100%;

  min-height: calc(100dvh - 62px);
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    padding-bottom: 20rem;
    min-height: calc(100dvh - 60.5px);
  }

  > section {
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      margin-bottom: 6rem;
      align-self: flex-start;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        margin-bottom: 10rem;
      }
    }
  }
`;
