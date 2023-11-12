import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDiv = styled(motion.main)`
  max-width: ${({ theme: t }) => t.breakpoints.maxContent};
  min-width: ${({ theme: t }) => t.breakpoints.minContent};
  padding: 0 2.1rem;
  position: relative;
  margin: 0 auto;
  width: 100%;
`;
