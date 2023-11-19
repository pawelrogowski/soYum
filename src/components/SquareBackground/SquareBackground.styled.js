import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDiv = styled(motion.div)`
  position: absolute;
  background: rgba(234, 243, 214, 1);
  width: 10rem;
  height: 10rem;
  border-radius: 6rem;
  top: 50%;
  left: 50%;
  transform: translate(0, -50%);
  z-index: -1;
`;
