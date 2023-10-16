import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.8);
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

    background: #fafafa;
    box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 3.2rem;
      padding: 5rem 4rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      padding: 5rem 5rem;
    }
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
      font-size: 1.4rem;
      line-height: 1.28;
      letter-spacing: -0.028rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.8rem;
        letter-spacing: -0.036rem;
        line-height: 1.333;
      }
    }
    > div {
      display: flex;
      gap: 0.8rem;
      > button {
        height: 4.9rem;
        font-size: 1.4rem;
        line-height: 1.285;
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 1.6rem;
          height: 5.9rem;
        }
      }
    }
  }
`;