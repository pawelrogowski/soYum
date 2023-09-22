import styled from "styled-components";
import { flexContainer, font, breakpoint } from "../../utils/mixins";
import { motion } from "framer-motion";
import leaves from "../../assets/images/leaves@1x.webp";
export const StyledAside = styled(motion.aside)`
  --font-family: ${({ theme }) => theme.navigation.font};
  --color-idle: ${({ theme }) => theme.navigation.colorIdle};
  --color-hover: ${({ theme }) => theme.navigation.colorHover};
  --bg: ${({ theme }) => theme.mobileMenu.bg};

  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: var(--bg);
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
      ${breakpoint.tablet`
        top: 2.1rem
      `}
    }
    &:after {
      content: "";
      position: absolute;
      background-image: url(${leaves});
      background-repeat: no-repeat;
      width: 335px;
      height: 517px;
      bottom: -175px;
      right: 9px;
      rotate: 424deg;
      filter: blur(4.5px);
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
      ${flexContainer({
        direction: "column",
        justify: "center",
        align: "center",
        wrap: "nowrap",
        gap: "3.6rem",
      })}
      ${breakpoint.tablet`
        gap: 4rem;
      `}

      >li>a,
    >span {
        ${font({
          family: "var(--font-family)",
          color: "var(--color-idle)",
          size: "1.8rem",
          weight: "500",
          height: "1.8rem",
          spacing: "-0.036rem",
        })}
        ${breakpoint.tablet`
          ${font({
            color: "var(--color-idle)",
            size: "2.4rem",
            weight: "500",
            height: "2.4rem",
            spacing: "-0.048rem",
          })}
        `}
        transition: color 100ms;
        &:hover,
        &:focus {
          color: var(--color-hover);
          transition: color 100ms;
        }
      }

      > li > button {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        > span {
          ${font({
            family: "var(--font-family)",
            color: "var(--color-idle)",
            size: "1.8rem",
            weight: "500",
            height: "1.8rem",
            spacing: "-0.036rem",
          })}
          ${breakpoint.tablet`
            ${font({
              color: "var(--color-idle)",
              size: "2.4rem",
              weight: "500",
              height: "2.4rem",
              spacing: "-0.048rem",
            })}
          `}
          transition: color 100ms;
          &:hover,
          &:focus {
            color: var(--color-hover);
            transition: color 100ms;
          }
        }
      }

      > li > button > svg {
        stroke: var(--color-idle);
        width: 2.4rem;
        height: 2.4rem;
        transition: stroke 100ms;
      }

      > li {
        &:focus,
        &:hover,
        &:focus-within {
          span {
            color: var(--color-hover);
          }
          svg {
            stroke: var(--color-hover);
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
