import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDiv = styled(motion.div)`
  --color-background: ${({ theme }) => theme.editProfilePopup.bg};
  --color-text: ${({ theme }) => theme.editProfilePopup.text};
  --color-icon: ${({ theme }) => theme.editProfilePopup.icon};
  --color-border: ${({ theme }) => theme.editProfilePopup.border};
  --color-button-text: ${({ theme }) => theme.editProfilePopup.button.text};
  --color-button-icon: ${({ theme }) => theme.editProfilePopup.button.icon};
  --color-button-icon-active: ${({ theme }) =>
    theme.editProfilePopup.button.iconActive};
  --color-button-text-active: ${({ theme }) =>
    theme.editProfilePopup.button.textActive};
  --color-text-active: ${({ theme }) => theme.editProfilePopup.textActive};
  --color-icon-active: ${({ theme }) => theme.editProfilePopup.iconActive};
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
      transition: color 200ms;
    }
    > svg {
      width: 1.4rem;
      height: 1.4rem;
      stroke: var(--color-icon);
      transition: stroke 200ms;
    }
    &:hover,
    &:focus,
    &:focus-within {
      > span {
        color: var(--color-button-text-active);
      }
      > svg {
        stroke: var(--color-button-icon-active);
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
    > svg {
      width: 1.8rem;
      height: 1.8rem;
      stroke: var(--color-button-icon);
    }
  }
`;
