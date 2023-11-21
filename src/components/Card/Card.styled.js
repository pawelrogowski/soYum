import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledFigure = styled(motion.figure)`
  --color-card-bg: ${({ theme: t }) => t.card.bg};
  --color-card-border-idle: ${({ theme: t }) => t.card.borderIdle};
  --color-card-border-active: ${({ theme: t }) => t.card.borderActive};
  --color-caption-text-idle: ${({ theme: t }) => t.card.caption.textIdle};
  --color-caption-text-active: ${({ theme: t }) => t.card.caption.textActive};
  --color-caption-bg-idle: ${({ theme: t }) => t.card.caption.bgIdle};
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.13), 0 1px 4px 0 rgba(0, 0, 0, 0.11);
  position: relative;
  display: flex;
  border-radius: 0.8rem;
  overflow: hidden;
  background-color: var(--color-card-bg);

  a {
    width: 100%;

    &:hover,
    &:focus,
    &:focus-within {
      > figcaption {
        color: var(--color-caption-text-active);
        border: 0.1rem solid var(--color-caption-text-active);
      }
    }
  }

  figcaption {
    position: absolute;
    bottom: 2.6rem;
    left: 1.8rem;
    background-color: var(--color-caption-bg-idle);
    border: 0.1rem solid var(--color-caption-bg-idle);
    border-radius: 0.4rem;
    padding: 1.6rem;
    width: calc(100% - 3.2rem);
    color: var(--color-caption-text-idle);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.024rem;
    transition: border-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
      color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
      background cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  img {
    transition: transform cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
    width: 30rem;
    width: 100%;
    height: 30rem;
    height: auto;
    aspect-ratio: 343 / 323;
    &:hover,
    &:focus {
      transform: scale(1.3);
      transition: transform cubic-bezier(0.17, 0.67, 1, 1.23) 60s;
    }
  }
`;
