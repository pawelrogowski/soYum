import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledGallery = styled(motion.section)`
  --color-button-bg-idle: ${({ theme: t }) => t.cardGallery.buttonBgIdle};
  --color-button-bg-active: ${({ theme: t }) => t.cardGallery.buttonBgActive};
  --color-button-border-idle: ${({ theme: t }) => t.cardGallery.buttonBorderIdle};
  --color-button-border-active: ${({ theme: t }) => t.cardGallery.buttonBorderActive};
  --color-button-text-idle: ${({ theme: t }) => t.cardGallery.buttonTextIdle};
  --color-button-text-active: ${({ theme: t }) => t.cardGallery.buttonTextActive};
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;
  gap: 2.4rem;
  width: 100%;
  @media screen and (max-width: ${({ theme: t }) => t.breakpoints.mobileMax}) {
    max-width: 48rem;
  }

  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    gap: 4rem;
  }
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
    gap: 5rem;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  > button {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    max-width: 11.4rem;
    max-height: 3.8rem;
    font-size: 1.4rem;
    line-height: 1.285;
    color: var(--color-button-text-idle);
    border-color: var(--color-button-border-idle);
    background-color: var(--color-button-bg-idle);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--color-button-bg-active);
      border-color: var(--color-button-border-active);
      color: var(--color-button-text-active);
      > svg {
        stroke: var(--color-button-text-active);
      }
    }
    > svg {
      stroke: var(--color-button-text-idle);
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;

    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      gap: 3.2rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      gap: 1.4rem;
    }
    li {
      flex-basis: 100%;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        flex-basis: calc((100% - 1 * 3.2rem) / 2);
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        flex-basis: calc((100% - 3 * 1.4rem) / 4);
      }
    }
  }
`;
