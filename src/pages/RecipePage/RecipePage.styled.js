import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled(motion.main)`
  .hero-section {
    position: relative;
    min-width: 100dvw;
    min-height: 45.5rem;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin-bottom: 3.2rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      min-height: 49.5rem;
      margin-bottom: 5rem;
    }
  }
  .list-section {
    max-width: ${({ theme: t }) => t.breakpoints.maxContent};
    min-width: ${({ theme: t }) => t.breakpoints.minContent};
    padding: 0 2.1rem 0 2.1rem;
    position: relative;
    margin: 0 auto;
    width: 100%;
  }
`;
