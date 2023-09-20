import styled from "styled-components";
import { flexContainer, font } from "../../utils/mixins";
import { motion } from "framer-motion";
import leaves from "../../assets/images/leaves@1x.webp";
import { breakpoint } from "../../utils/mixins";
export const StyledAside = styled(motion.aside)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.mobileMenu.bg};
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
        gap: "3rem",
      })}

      >li>a,
    >span {
        ${font({
          family: ({ theme }) => theme.navigation.font,
          color: ({ theme }) => theme.navigation.colorIdle,
          size: "1.4rem",
          weight: "500",
          height: "1.8rem",
          spacing: "-0.028rem",
        })}
        transition: color 100ms;
        &:hover,
        &:focus {
          color: ${({ theme }) => theme.navigation.colorHover};
          transition: color 100ms;
        }
      }

      > li > button > svg {
        stroke: ${({ theme }) => theme.navigation.colorIdle};
        width: 2.4rem;
        height: 2.4rem;
        transition: stroke 100ms;
      }

      > li {
        &:focus,
        &:hover {
          svg {
            stroke: ${({ theme }) => theme.navigation.colorHover};
          }
        }
      }

      > li > button {
        width: 2.4rem;
        height: 2.4rem;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
`;
