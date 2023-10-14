import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDiv = styled(motion.div)`
  position: absolute;
  border-radius: 3rem;
  > div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    > form {
      > input {
        width: 100%;
      }
    }
  }
`;
