import { motion } from "framer-motion";
import { css, styled } from "styled-components";

export const StyledSpan = styled(motion.span)`
  width: 100%;
  height: 3px;
  display: block;

  position: ${({ isGlobal }) => (isGlobal ? css`fixed` : css`absolute`)};
  background: none;
  overflow: hidden;
  top: 0;
  left: 0;
  &:after {
    content: "";
    width: 15dvw;
    height: 3px;
    background: rgb(139, 170, 54);

    position: ${({ isGlobal }) => (isGlobal ? css`fixed` : css`absolute`)};
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: animloader 2s ease-in-out infinite;
  }

  @keyframes animloader {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;
