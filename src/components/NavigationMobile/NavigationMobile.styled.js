import styled from "styled-components";
import { motion } from "framer-motion";
import leaves from "../../assets/images/leaves@1x.webp";

export const StyledAside = styled(motion.aside)`
  --font-navigation: ${({ theme }) => theme.navigation.font};
  --color-navigation-idle: ${({ theme }) => theme.navigation.colorIdle};
  --color-navigation-hover: ${({ theme }) => theme.navigation.colorHover};
  --color-mobileMenu-bg: ${({ theme }) => theme.mobileMenu.bg};
  --breakpoint-tablet: ${({ theme }) => theme.breakpoints.tablet};

  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: var(--color-mobileMenu-bg);
  > div {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      position: absolute;
      top: 2.3rem;
      left: 1.6rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        top: 2.1rem;
      }
    }
    &:after {
      content: "";
      position: absolute;
      background-image: url(${leaves});
      background-repeat: no-repeat;
      width: 33.5rem;
      height: 51.7rem;
      bottom: -17.5rem;
      right: 0.9rem;
      rotate: 424deg;
      filter: blur(0.85rem);
      z-index: -1;
    }
    > button {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 1.4rem;
      right: 1rem;
      height: 6.4rem;
      width: 6.4rem;
      > svg {
        margin-top: 1.4rem;
        width: 2rem;
      }
    }

    > label {
      position: absolute;
      bottom: 1.8rem;
      left: 1.6rem;
    }

    > ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      gap: 3.6rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 4rem;
      }

      > li > a,
      > li > span {
        color: var(--color-navigation-idle);
        font-size: 1.8rem;
        font-family: var(--font-navigation);
        line-height: 1.8rem;
        letter-spacing: -0.036rem;
        font-weight: 500;
        font-style: normal;

        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 2.4rem;
          font-weight: 500;
          line-height: 2.4rem;
          letter-spacing: -0.048rem;
        }
        transition: color 100ms;
        &:hover,
        &:focus {
          color: var(--color-navigation-hover);
          transition: color 100ms;
        }
      }

      > li > button {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        > span {
          color: var(--color-navigation-idle);
          font-size: 1.8rem;
          font-family: var(--font-navigation);
          line-height: 1.8rem;
          letter-spacing: -0.036rem;
          font-weight: 500;
          font-style: normal;

          @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            font-size: 2.4rem;
            font-weight: 500;
            line-height: 2.4rem;
            letter-spacing: -0.048rem;
          }
          transition: color 100ms;
          &:hover,
          &:focus {
            color: var(--color-navigation-hover);
            transition: color 100ms;
          }
        }
      }

      > li > button > svg {
        stroke: var(--color-navigation-idle);
        width: 2.4rem;
        height: 2.4rem;
        transition: stroke 100ms;
      }

      > li {
        &:focus,
        &:hover,
        &:focus-within {
          span {
            color: var(--color-navigation-hover);
          }
          svg {
            stroke: var(--color-navigation-hover);
          }
        }
      }

      > li > button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
`;
