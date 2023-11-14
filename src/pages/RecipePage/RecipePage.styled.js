import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled(motion.main)`
  .hero-section {
    position: relative;
    min-width: 100dvw;
    min-height: 45.5rem;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      min-height: 49.5rem;
    }
  }
`;
