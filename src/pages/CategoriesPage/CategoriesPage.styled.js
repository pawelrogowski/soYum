import { motion } from "framer-motion";
import styled from "styled-components";
export const MainContainer = styled(motion.main)`
  max-width: ${({ theme }) => theme.breakpoints.maxContent};
  min-width: ${({ theme }) => theme.breakpoints.minContent};
  padding: 10rem 2.1rem 10rem 2.1rem;
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100dvh - 62px);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 20rem;
    min-height: calc(100dvh - 60.5px);
  }

  > h1 {
    margin-bottom: 6rem;
    align-self: flex-start;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-bottom: 7.4rem;
    }
  }
  > nav {
    margin-bottom: 6.6rem;
  }
`;
