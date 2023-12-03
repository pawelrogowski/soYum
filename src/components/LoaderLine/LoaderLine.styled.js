import { motion } from "framer-motion";
import { css, styled } from "styled-components";

export const StyledSpan = styled(motion.span)`
  width: 100%;
  height: 5px;
  display: block;

  position: ${({ isGlobal }) => (isGlobal ? css`fixed` : css`absolute`)};
  overflow: hidden;
  top: 0;
  left: 0;
  &:after {
    content: "";
    width: 15dvw;
    height: 5px;
    background: rgba(112, 153, 29, 1);
    border-radius: 4px;
    position: ${({ isGlobal }) => (isGlobal ? css`fixed` : css`absolute`)};
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: animloader 1.7s ease-in-out infinite;
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
