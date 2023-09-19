import styled from "styled-components";
import { flexContainer, font } from "../../utils/mixins";

export const StyledNav = styled.nav`
  position: fixed;
  top: 25vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  label {
    position: fixed;
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
`;
