import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDiv = styled(motion.div)`
  --color-bg: ${({ theme: t }) => t.editUserModal.bg};
  --color-backdrop: ${({ theme: t }) => t.editUserModal.backdrop};
  --color-icon-idle: ${({ theme: t }) => t.editUserModal.iconIdle};
  --color-icon-active: ${({ theme: t }) => t.editUserModal.iconActive};
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  background: var(--color-backdrop);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  z-index: 5;
  > div {
    overflow: hidden;
    position: relative;
    padding: 3.2rem 2.4rem;
    border-radius: 2.4rem;
    min-width: 32rem;
    width: 33rem;
    background: var(--color-bg);
    box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      padding: 5rem 4rem;
      width: 48rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      padding: 6rem 5rem;
      width: 50rem;
    }
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
          stroke: var(--color-icon-active);
        }
      }
      > svg {
        fill: var(--color-icon-idle);
        stroke: var(--color-icon-idle);
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
