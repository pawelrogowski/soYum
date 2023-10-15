import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  > div {
    position: relative;
    > button {
      cursor: pointer;
      position: absolute;
      right: 2.4rem;
      top: 3.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      border: none;
      background: none;
      &:hover,
      &:focus {
        > svg {
          stroke: #8baa36;
        }
      }
      > svg {
        fill: black;
        stroke: black;
        width: 2rem;
        height: 2rem;
      }
    }
    padding: 3.2rem 2.4rem;
    border-radius: 2.4rem;
    max-width: 33rem;
    max-height: 33rem;
    background: #fafafa;
    box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  }
`;
