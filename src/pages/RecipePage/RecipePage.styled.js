import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled(motion.main)`
  .hero-section {
    position: relative;
    min-width: 100dvw;
    min-height: 45.5rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      min-height: 49.5rem;
    }
  }
`;
