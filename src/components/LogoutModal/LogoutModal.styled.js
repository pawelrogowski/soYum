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
  align-items: flex-start;
  padding-top: 10vh;
  z-index: 5;
  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    position: relative;
    padding: 4.4rem 2.4rem;
    border-radius: 2.4rem;
    min-width: 32rem;
    width: 33rem;
    background: #fafafa;
    box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
    > button {
      cursor: pointer;
      position: absolute;
      right: 2rem;
      top: 2rem;
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
    > p {
      color: #23262a;
      text-align: center;
      font-family: Poppins;
      font-size: 1.4rem;
      line-height: 1.28;
      letter-spacing: -0.028rerm;
    }
    > div {
      display: flex;
      gap: 0.8rem;
      > button {
        height: 4.9rem;
      }
    }
  }
`;
