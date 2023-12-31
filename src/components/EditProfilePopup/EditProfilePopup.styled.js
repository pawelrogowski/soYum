import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDiv = styled(motion.div)`
  --color-background: ${({ theme: t }) => t.editProfilePopup.bg};
  --color-text: ${({ theme: t }) => t.editProfilePopup.text};
  --color-icon: ${({ theme: t }) => t.editProfilePopup.icon};
  --color-border: ${({ theme: t }) => t.editProfilePopup.border};
  --color-button-text: ${({ theme: t }) => t.editProfilePopup.button.text};
  --color-button-bg: ${({ theme: t }) => t.editProfilePopup.button.bg};
  --color-button-border: ${({ theme: t }) => t.editProfilePopup.button.border};
  --color-button-icon: ${({ theme: t }) => t.editProfilePopup.button.icon};
  --color-button-icon-active: ${({ theme: t }) => t.editProfilePopup.button.iconActive};
  --color-button-text-active: ${({ theme: t }) => t.editProfilePopup.button.textActive};
  --color-text-active: ${({ theme: t }) => t.editProfilePopup.textActive};
  --color-icon-active: ${({ theme: t }) => t.editProfilePopup.iconActive};

  transform-origin: top;
  position: absolute;
  top: calc(100% + 1.4rem);
  left: -50%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  width: 16.1rem;
  height: 13rem;
  border-radius: 0.8rem;
  padding: 1.8rem;
  background: var(--color-background);
  border: solid 1px var(--color-border);
  transform: translateX(-50%, -50%);
  z-index: 1;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    > span {
      color: var(--color-text);
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.6;
      transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
    }

    > svg {
      width: 1.4rem;
      height: 1.4rem;
      stroke: var(--color-icon);
      transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
    }

    &:hover,
    &:focus,
    &:focus-within {
      > span {
        color: var(--color-text-active);
      }
      > svg {
        stroke: var(--color-text-active);
      }
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    color: var(--color-button-text);
    width: 12.5rem;
    height: 4.3rem;
    font-size: 1.4rem;
    line-height: 2.1rem;
    background: var(--color-button-bg);
    border: 1px solid var(--color-button-border);
    > svg {
      width: 1.8rem;
      height: 1.8rem;
      stroke: var(--color-button-icon);
    }
    &:hover,
    &:focus {
      border: 1px solid var(--color-border);
      background: var(--color-border);
      color: var(--color-button-text);
    }
  }
`;
