import { css, styled } from "styled-components";

export const StyledHeader = styled.header`
  --color-decoration: ${({ theme: t }) => t.backgroundDecoration.primary};
  ${({ $fixed }) =>
    $fixed
      ? css`
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        `
      : css`
          position: relative;
        `}

  max-width: ${({ theme: t }) => t.breakpoints.maxContent};
  min-width: ${({ theme: t }) => t.breakpoints.minContent};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  padding: 1.8rem 2.1rem 0 2.1rem;
  ${({ $addDecor }) =>
    $addDecor &&
    css`
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.3rem;
        background-color: var(--color-decoration);
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          width: 1.4rem;
          height: 1.4rem;
        }
      }

      &::before {
        bottom: -2.1rem;
        left: 14.3rem;
        rotate: -25deg;

        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
          bottom: -5.8rem;
          left: 19.8rem;
        }
      }

      &::after {
        bottom: -4.4rem;
        right: 1rem;
        rotate: -25deg;

        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
          bottom: -6.9rem;
          right: 10rem;
        }
      }
    `}

  > a:first-of-type {
    z-index: 3;
    margin-right: auto;
  }

  ${({ $altFontColors }) =>
    $altFontColors &&
    css`
      a:not(:hover),
      button:not(:hover) > span {
        color: rgba(35, 38, 42, 1) !important;
        &:hover,
        &:focus,
        &:focus-within {
          color: var(--color-navigation-hover) !important;
        }
      }
      nav {
        svg {
          stroke: rgba(35, 38, 42, 1) !important;
          &:hover,
          &:focus {
            stroke: var(--color-navigation-hover) !important;
          }
        }
      }
    `}
  .theme-switch-placeholder {
    width: 6.1rem;
    height: 2.7rem;
  }
`;
