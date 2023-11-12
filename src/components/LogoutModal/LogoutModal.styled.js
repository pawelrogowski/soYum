import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDiv = styled(motion.div)`
  --color-bg: ${({ theme: t }) => t.logoutModal.bg};
  --color-icon-idle: ${({ theme: t }) => t.logoutModal.iconIdle};
  --color-icon-active: ${({ theme: t }) => t.logoutModal.iconActive};
  --color-text: ${({ theme: t }) => t.logoutModal.text};
  --color-button-logout-bg-idle: ${({ theme: t }) => t.logoutModal.buttons.logoutBgIdle};
  --color-button-logout-bg-active: ${({ theme: t }) => t.logoutModal.buttons.logoutBgActive};
  --color-button-logout-border-idle: ${({ theme: t }) => t.logoutModal.buttons.logoutBorderIdle};
  --color-button-logout-border-active: ${({ theme }) =>
    theme.logoutModal.buttons.logoutBorderActive};
  --color-button-logout-text-idle: ${({ theme: t }) => t.logoutModal.buttons.logoutTextIdle};
  --color-button-logout-text-active: ${({ theme: t }) => t.logoutModal.buttons.logoutTextActive};
  --color-button-cancel-bg-idle: ${({ theme: t }) => t.logoutModal.buttons.cancelBgIdle};
  --color-button-cancel-bg-active: ${({ theme: t }) => t.logoutModal.buttons.cancelBgActive};
  --color-button-cancel-border-idle: ${({ theme: t }) => t.logoutModal.buttons.cancelBorderIdle};
  --color-button-cancel-border-active: ${({ theme }) =>
    theme.logoutModal.buttons.cancelBorderActive};
  --color-button-cancel-text-idle: ${({ theme: t }) => t.logoutModal.buttons.cancelTextIdle};
  --color-button-cancel-text-active: ${({ theme: t }) => t.logoutModal.buttons.cancelTextActive};
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

    background: var(--color-bg);
    box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      gap: 3.2rem;
      padding: 5rem 4rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
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
    > p {
      color: var(--color-text);
      text-align: center;
      font-size: 1.4rem;
      line-height: 1.28;
      letter-spacing: -0.028rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
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
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          font-size: 1.6rem;
          height: 5.9rem;
        }
        &:first-of-type {
          background: var(--color-button-logout-bg-idle);
          border-color: var(--color-button-logout-border-idle);
          color: var(--color-button-logout-text-idle);
          &:hover,
          &:focus {
            background: var(--color-button-logout-bg-active);
            border-color: var(--color-button-logout-border-active);
            color: var(--color-button-logout-text-active);
          }
        }
        &:nth-of-type(2) {
          background: var(--color-button-cancel-bg-idle);
          border-color: var(--color-button-cancel-border-idle);
          color: var(--color-button-cancel-text-idle);
          &:hover,
          &:focus {
            background: var(--color-button-cancel-bg-active);
            border-color: var(--color-button-cancel-border-active);
            color: var(--color-button-cancel-text-active);
          }
        }
      }
    }
  }
`;
